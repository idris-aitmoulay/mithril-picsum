import _ from "lodash";
const Core = require('autoresponsive-core');

const { GridSort } = Core;
import AnimationManager from './animation';
import { GridSize } from "./constants";

const noop = () => {};

const Layout = () => {
  let containerHeight, containerStyle, containerWidth, gridWidth, onItemDidLayout, onContainerDidLayout;
  let itemMargin = 0, sortManager, animationManager, fixedContainerHeight = 200;

  const getContainerStyle = () => {
    containerStyle = {
      position: 'relative',
      height: containerHeight || 0
    };
    return containerStyle;
  };

  const oninit = ({ attrs }) => {
    containerHeight = _.get(attrs, 'containerHeight', undefined);
    gridWidth = _.get(attrs, 'gridWidth', 10);
    containerWidth = _.get(attrs, 'containerWidth', 200);
    itemMargin = _.get(attrs, 'itemMargin', 10);
    onItemDidLayout = _.get(attrs, 'onItemDidLayout', noop);
    onContainerDidLayout = _.get(attrs, 'onContainerDidLayout', noop);

    sortManager = new GridSort({
      containerWidth: _.get(attrs,'containerWidth', 200),
      gridWidth: _.get(attrs,'gridWidth', 10)
    });
    sortManager.init();
    animationManager = new AnimationManager();
  };

  const setPrivateProps = () => {
    containerStyle = {
      position: 'relative',
      height: containerHeight || 0
    };

    if (typeof containerHeight === 'number') {
      fixedContainerHeight = true;
      containerStyle.height = containerHeight;
    } else {
      fixedContainerHeight = false;
    }
  };

  const renderChildren = (children = []) => {
    return children.map((child, childIndex) => {
      const attrs = _.get(child, 'attrs', { });
      const grids = attrs ? Object.keys(attrs).filter(item => ('' + item).startsWith('size-')) : [];

      let size = GridSize['size-m'];
      if (!_.isEmpty(grids)) {
        size = GridSize[grids[0]];
      }
      const childSize = size + itemMargin;

      if (!sortManager) {
        sortManager = new GridSort({ containerWidth, gridWidth });
        sortManager.init();
      }
      let calculatedPosition = sortManager.getPosition(childSize, childSize);


      if (fixedContainerHeight && containerWidth) {
        if (calculatedPosition[1] + childSize > containerStyle.height) {
          containerStyle.height = calculatedPosition[1] + childSize;
        }
      }

      const options = Object.assign({}, {
        position: calculatedPosition,
        size: {
          width: childSize,
          height: childSize
        },
        containerHeight: containerStyle.height,
        itemMargin: itemMargin
      });

      onItemDidLayout?.call(this, child);

      if (childIndex + 1 === children.length) {
        onContainerDidLayout?.call(this);
      }

      let calculatedStyle = animationManager.generate(options);
      calculatedStyle = mixItemInlineStyle(calculatedStyle);

      const style = Object.assign({}, _.get(child, 'attrs.style'), calculatedStyle);
      child.attrs = {
        ..._.get(child, 'attrs', {}),
        style: {
          ...style,
          ..._.get(child, 'attrs.style', {})
        }
      };

      return child;
    })
  };

  const mixItemInlineStyle = s => {
    let style = {
      display: 'block',
      float: 'left',
      margin: `0 ${itemMargin}px ${itemMargin}px 0`
    };

    if (containerWidth) {
      style = {
        position: 'absolute'
      };
    }
    return Object.assign(s, style);
  };


  return {
    oninit,
    view: ({ children }) => {
      setPrivateProps();
      return (
        <div ref="container" style={getContainerStyle()}>
          {renderChildren(children)}
        </div>
      )
    }
  };
};

export default Layout;

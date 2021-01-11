import _ from "lodash";
const Core = require('autoresponsive-core');

const { GridSort } = Core;
import AnimationManager from './animation';

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

  const oncreate = vnode => {
    sortManager = new GridSort({
      containerWidth: _.get(vnode,'attr.containerWidth', 0),
      gridWidth: _.get(vnode,'attr.gridWidth', 0)
    });
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
      let childWidth = _.get(child, 'attrs.style.width', 10) + itemMargin;
      let childHeight = _.get(child, 'attrs.style.height', 10) + itemMargin;
      if (!sortManager) {
        sortManager = new GridSort({ containerWidth, gridWidth });
        sortManager.init();
      }
      let calculatedPosition = sortManager.getPosition(childWidth, childHeight);

      console.log(calculatedPosition);

      if (fixedContainerHeight && containerWidth) {
        if (calculatedPosition[1] + childHeight > containerStyle.height) {
          containerStyle.height = calculatedPosition[1] + childHeight;
        }
      }

      const options = Object.assign({}, {
        position: calculatedPosition,
        size: {
          width: childWidth,
          height: childHeight
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

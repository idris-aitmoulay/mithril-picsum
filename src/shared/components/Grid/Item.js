import _ from "lodash";
import { GridSize } from "./constants";

const Item = () => {
  let size;
  const oninit = ({ attrs }) => {
    size = _.get(attrs, 'size', 'm');
  };

  const getItemStyle = (attrs = {}) => {
    let customStyle = _.get(attrs, 'style', {});
    const style = {
      width: GridSize[size],
      height: GridSize[size]
    };
    return Object.assign(style, customStyle);
  };

  return {
    oninit,
    view: ({ attrs, children }) =>(
      <div style={getItemStyle(attrs)}>
        {children}
      </div>
    )
  };
};

export default Item;

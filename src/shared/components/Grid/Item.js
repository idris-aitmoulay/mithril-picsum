import { GridSize } from "./constants";

const gridStyle = (size = 'm') => {
  return ({
    width: GridSize[size],
    height: GridSize[size]
  });
};


export default gridStyle;

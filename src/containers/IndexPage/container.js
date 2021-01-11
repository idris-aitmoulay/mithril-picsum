import {
  Panel,
  GridLayout,
  GridSize
} from '../../shared/components';
const HomePage = () => {

  const getAutoResponsiveProps = () => {
    return {
      itemMargin: 10,
      containerWidth: document.body.clientWidth,
      itemClassName: 'item',
      gridWidth: 100,
      transitionDuration: '.5'
    };
  };

  let style = {
    width: GridSize.m,
    height: GridSize.m
  };

  return {
    view: () => (
        <div>
          <GridLayout ref="container" {...getAutoResponsiveProps()}>
            <div style={style}>dd</div>
            <div style={style}>aaa</div>
            <div style={style}>asa</div>
            <div style={style}>sasq</div>
            <div style={style}>asa</div>
            <div style={style}>sasq</div>
          </GridLayout>
        </div>
      )
  };
};

export default HomePage;

import {
  Panel,
  GridLayout,
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

  return {
    view: () => (
        <div>
          <GridLayout ref="container" {...getAutoResponsiveProps()}>
            <div size-l>dsds</div>
            <div size-s>dsds</div>
            <div size-s>dd</div>
            <div>dd</div>
            <div>dd</div>
            <div>dd</div>
            <div size-m>dd</div>
            <div>dd</div>
            <div>dd</div>
            <div>dd</div>
            <div>dd</div>
            <div>dd</div>
            <div>dd</div>
          </GridLayout>
        </div>
      )
  };
};

export default HomePage;

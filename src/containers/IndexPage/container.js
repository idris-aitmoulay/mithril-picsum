import {
  Panel,
  GridLayout,
  divLayout
} from '../../shared/components';
import { gridItemLayout } from "../../shared/components/Grid";
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
            <div style={gridItemLayout('l')}>dsds</div>
            <div style={gridItemLayout('m')}>dsds</div>
            <div>dd</div>
            <div>dd</div>
            <div>dd</div>
            <div style={gridItemLayout('l')}>dd</div>
            <div>dd</div>
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

import { createStructuredSelector } from 'reselect';
import { GridLayout } from '../../shared/components';
import { GRID_SIZE, GridSize } from "../../shared/components/Grid";
import { connect } from '../../shared/store/connect';
import { fillPictures } from './actions';

const size = ['size-s', 'size-m', 'size-l'];

const HomePage = () => {
  let data = [];
  const getAutoResponsiveProps = () => {
    return {
      itemMargin: 10,
      containerWidth: document.body.clientWidth,
      itemClassName: 'item',
      gridWidth: 100,
      transitionDuration: '.5'
    };
  };

  const getPanelProps = sizeGrid => ({
    [sizeGrid]: true,
    style: {
      background: 'blue',
      width: GRID_SIZE[sizeGrid],
      height: GRID_SIZE[sizeGrid]
    }
  });

  const sendXHRQuery = () => {

  };


  return {
    view: () => (
        <div>
          <GridLayout ref="container" {...getAutoResponsiveProps()}>
            <div {...getPanelProps(size[1])}>
              <img style={{position: 'absolute'}} src={`https://picsum.photos/id/0/${GridSize["size-m"]}/${GridSize["size-m"]}`} alt=""/>
              <span style={{ position: 'absolute', color: 'white', bottom: 0, 'margin': "16px" }}>Alejandro Escamilla</span>

            </div>
            <div {...getPanelProps(size[1])}>
              <img style={{position: 'absolute'}} src={`https://picsum.photos/id/0/${GridSize["size-m"]}/${GridSize["size-m"]}`} alt=""/>
              <span style={{ position: 'absolute', color: 'white', bottom: 0, 'margin': "16px" }}>Alejandro Escamilla</span>

            </div>
            <div {...getPanelProps(size[0])}>
              <img style={{position: 'absolute'}} src={`https://picsum.photos/id/0/${GridSize["size-s"]}/${GridSize["size-s"]}`} alt=""/>
              <span style={{ position: 'absolute', color: 'white', bottom: 0, 'margin': "16px" }}>Alejandro Escamilla</span>
            </div>
            <div {...getPanelProps(size[2])}>
              <img style={{position: 'absolute'}} src={`https://picsum.photos/id/0/${GridSize["size-l"]}/${GridSize["size-l"]}`} alt=""/>
              <span style={{ position: 'absolute', color: 'white', bottom: 0, 'margin': "16px" }}>Alejandro Escamilla</span>
            </div>
            <div {...getPanelProps(size[1])}>dsds</div>
            <div {...getPanelProps(size[1])}>dsds</div>
            <div {...getPanelProps(size[1])}>dsds</div>
            <div {...getPanelProps(size[1])}>dsds</div>
            <div {...getPanelProps(size[1])}>dsds</div>
            <div {...getPanelProps(size[1])}>dsds</div>
            <div {...getPanelProps(size[1])}>dsds</div>
            <div {...getPanelProps(size[1])}>dsds</div>
            <div {...getPanelProps(size[1])}>dsds</div>
            <div {...getPanelProps(size[2])}>dsds</div>
          </GridLayout>
        </div>
      )
  };
};


const mapDispatchToVnodeAttrs = dispatch => ({
  loadPicturesAction: data => dispatch(fillPictures(data)),
});


export default connect(null, mapDispatchToVnodeAttrs)(HomePage);

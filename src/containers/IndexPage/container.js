import { createStructuredSelector } from "reselect";
import _ from 'lodash';
import { GridLayout, Panel } from '../../shared/components';
import { GRID_SIZE, GridSize } from "../../shared/components/Grid";
import { connect } from '../../shared/store';
import { fillPictures } from './actions';
import { makeSelectPicturesLoading, makeSelectPicturesError, makeSelectPictures } from './selectors';
import { GetRandomWithProbability } from './utils';

const size = ['size-s', 'size-m', 'size-l'];

const noop = () => {};

const HomePage = () => {
  let dataLoad = [];
  let data = [];
  let loadPicturesAction;
  const oninit = vnode => {
    if (!loadPicturesAction) {
      loadPicturesAction = _.get(vnode, 'attrs.loadPicturesAction', noop);
    }
    loadPicturesAction();
  };

  const getAutoResponsiveProps = () => {
    return {
      itemMargin: 10,
      containerWidth: document.body.clientWidth - 40,
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

  const setPicturesTpoData = pictures => {
    if (pictures && pictures.size !== 0 && !_.isEqual(data, pictures)) {
      data = pictures;
      dataLoad = _.map(pictures, item => ({
        ...item,
        gridSize: GetRandomWithProbability()
      }));
    }
  };

  return {
    oninit,
    view: ({ attrs }) => {
      const {
        pictures
      } = attrs;
      setPicturesTpoData(pictures);
      return (
        <GridLayout ref="container" {...getAutoResponsiveProps()}>
          {
            dataLoad.map(item => {
              const sizeIndex = item.gridSize;
              const { author, download_url } = item;
              const urlBase = _.dropRight(download_url.split("/"), 2).join("/");
              const sizeItem = GridSize[size[sizeIndex]];
              const url = `${urlBase}/${sizeItem}/${sizeItem}`;
              const sizeString = `${sizeItem}px`;
              return (
                <div {...getPanelProps(size[sizeIndex])}>
                  <Panel url={url} text={author} width={sizeString} height={sizeString} />
                </div>)
            })
          }
        </GridLayout>
      )
    }
  };
};

const mapStateToVnodeAttrs = createStructuredSelector({
  loading: makeSelectPicturesLoading(),
  pictures: makeSelectPictures(),
  error: makeSelectPicturesError()
});

const mapDispatchToVnodeAttrs = dispatch => ({
  loadPicturesAction: data => dispatch(fillPictures(data)),
});


export default connect(mapStateToVnodeAttrs, mapDispatchToVnodeAttrs)(HomePage);

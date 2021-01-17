import { takeLatest } from "../../shared/store";
import { PICTURES } from './constants';
import { fillPicturesSuccess, fillPicturesFailed } from './actions';

const GetPictureSagas = ({ action, dispatch }) => {
  m.request({
    method: "GET",
    url: "https://picsum.photos/v2/list"
  }).then((result) => {
    dispatch(fillPicturesSuccess(result));
  }).catch(() => {
    dispatch(fillPicturesFailed());
  });
};

// const sagas = takeLatest(PICTURES, GetPictureSagas);

export default [
];

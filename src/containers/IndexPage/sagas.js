import { takeLatest } from "../../shared/store/utils";
import { PICTURES } from './constants';
import { dispatch } from '../../shared/store/connect';
import { fillPicturesSuccess, fillPicturesFailed } from './actions';
export const GetPictureSagas = action => {
  m.request({
    method: "PUT",
    url: "https://picsum.photos/v2/list"
  }).then(function(result) {
    dispatch(fillPicturesSuccess(result));
  }).catch(error => {
    dispatch(fillPicturesFailed());
  });
};

export default [
  takeLatest(PICTURES, GetPictureSagas)
]

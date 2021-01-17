import { PICTURES } from './constants';
import { fillPicturesSuccess, fillPicturesFailed } from './actions';

const takeLatest = (fixedAction, callBackSagas) => {
  const noop = () => {};
  function returnedFn(params) {
    const { action, dispatch } = params;
    const { type } = action;
    if (fixedAction === type) {
      return callBackSagas({ action, dispatch });
    }
    return noop()
  }
  return returnedFn;
};


const GetPictureSagas = ({ dispatch }) => {
  m.request({
    method: "GET",
    url: "https://picsum.photos/v2/list"
  }).then((result) => {
    dispatch(fillPicturesSuccess(result));
  }).catch(() => {
    dispatch(fillPicturesFailed());
  });
};

export default [
  takeLatest(PICTURES, GetPictureSagas)
];

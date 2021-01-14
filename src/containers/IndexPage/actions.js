import { PICTURES, PICTURES_SUCCESS, PICTURES_FAILED } from './constants';

const fillPictures = ({ payload }) => ({
  type: PICTURES,
  payload
});

const fillPicturesSuccess = ({ payload }) => ({
  type: PICTURES_SUCCESS,
  payload
});

const fillPicturesFailed = ({ error }) => ({
  type: PICTURES_FAILED,
  error
});

export { fillPictures, fillPicturesSuccess, fillPicturesFailed };

import { PICTURES, PICTURES_SUCCESS, PICTURES_FAILED } from './constants';

const fillPictures = payload => ({
  type: PICTURES,
  payload
});

const fillPicturesSuccess = payload => ({
  type: PICTURES_SUCCESS,
  payload
});

const fillPicturesFailed = () => ({
  type: PICTURES_FAILED,
  error: { message: 'error loading' }
});

export { fillPictures, fillPicturesSuccess, fillPicturesFailed };

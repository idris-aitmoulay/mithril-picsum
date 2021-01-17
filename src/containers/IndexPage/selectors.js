import { createSelector } from 'reselect';

const selectPicturesReducer = state => state.pictures;

export const makeSelectPictures = () => createSelector(
  selectPicturesReducer,
  pictures => pictures.get('payload')
);

export const makeSelectPicturesLoading = () => createSelector(
  selectPicturesReducer,
  pictures => pictures.get('loading')
);

export const makeSelectPicturesError = () => createSelector(
  selectPicturesReducer,
  pictures => pictures.get('error')
);

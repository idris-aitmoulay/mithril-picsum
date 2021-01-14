import { PICTURES, PICTURES_FAILED, PICTURES_SUCCESS } from './constants';

const initialState = { payload: [], error: { }, loading: false };

export default (
  state = initialState,
  action
) => {
  switch (action.type) {
    case PICTURES:
      return state;
    case PICTURES_FAILED:
      return state;
    case PICTURES_SUCCESS:
      return state;
    default:
      return state;
  }
};

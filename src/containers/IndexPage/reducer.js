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
      console.log('action failed:' , action);
      return state;
    case PICTURES_SUCCESS:
      console.log('action success: ', action);
      return state;
    default:
      return state;
  }
};

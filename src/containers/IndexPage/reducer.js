import { fromJS } from "immutable";
import { PICTURES, PICTURES_FAILED, PICTURES_SUCCESS } from './constants';

const initialState = fromJS(
  {
    payload: [],
    error: { },
    loading: false
  }
);

export default (
  state = initialState,
  action
) => {
  switch (action.type) {
    case PICTURES:
      return state;
    case PICTURES_FAILED:
      // todo: need to write error message into store.
      return state.set('loading', false);
    case PICTURES_SUCCESS:
      return state
        .set('loading', false)
        .set('payload', action.payload);
    default:
      return state.set('loading', true);
  }
};

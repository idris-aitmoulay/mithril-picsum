const initialState = { };
import _ from 'lodash';

const noop = () => {};

export const noopReducers = (sagasReducers = []) => (
  state = initialState,
  action
) => {
  _.forEach(sagasReducers, sagasAction => {
    sagasAction(action);
  });
  return state;
};


export const takeLatest = (fixedAction, callBackSagas) => action => {
  const { type } = action;
  if (fixedAction === type) {
    return callBackSagas(action);
  }
  return noop()
};

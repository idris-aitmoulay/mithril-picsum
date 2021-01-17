const initialState = { };
import _ from 'lodash';
// import store from './config';


const noop = () => {};

const noopReducers = (sagasReducers = []) => (
  state = initialState,
  action
) => {
  _.forEach(sagasReducers, sagasAction => {
    sagasAction({ action, dispatch: noop });
  });
  return state;
};


const takeLatest = (fixedAction, callBackSagas) => action => {
  const { type } = action;
  if (fixedAction === type) {
    return callBackSagas(action);
  }
  return noop()
};

export {
  noopReducers,
  takeLatest
}

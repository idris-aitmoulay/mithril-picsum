const initialState = { };
import _ from 'lodash';
import { put } from './config';

const noopReducers = (sagasReducers = []) => (
  state = initialState,
  action
) => {
  _.forEach(sagasReducers, sagasAction => {
    sagasAction({ action, dispatch: put });
  });
  return state;
};


export {
  noopReducers,
}

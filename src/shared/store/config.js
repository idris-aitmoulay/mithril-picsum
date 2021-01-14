import { createStore, combineReducers } from 'redux';
import reducers from '../../containers/reducers';

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };

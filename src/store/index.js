import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import reducer from '../reducers/index';

let store;

//create store takes two argument rootReducer and applyMiddleware takes middleware as an argument , here thunk and logger are middleware
export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk, logger));
  return store;
}

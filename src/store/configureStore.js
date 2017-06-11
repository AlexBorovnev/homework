import {createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import {logger} from '../middleware/logger';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger)
  );
}
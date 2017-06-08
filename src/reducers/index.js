import { combineReducers } from 'redux'
import items from './items'

const itemApp = combineReducers({
  items,
});

export default itemApp;
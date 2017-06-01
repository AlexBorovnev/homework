import {combineReducers} from 'redux';
import itemsReducers from './items';

const rootReducer = combineReducers({
    itemsReducers,
});

export default rootReducer;

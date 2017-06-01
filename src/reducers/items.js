import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function itemsReducers(state = initialState.items, action) {
    switch (action.type) {
        case types.CREATE_ITEMS_SUCCESS:
            return [
                ...state, action.item
            ];
        default:
            return state;
    }
}

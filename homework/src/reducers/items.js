import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function itemsReducers(state = initialState.items, action) {
    switch (action.type) {
        case types.LOAD_ITEMS_SUCCESS:
            return action.items;

        case types.CREATE_ITEMS_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.item)
            ];

        default:
            return state;
    }
}

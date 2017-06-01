import * as types from './actionTypes';

export function loadItemsSuccess(items) {
    return { type: types.LOAD_ITEMS_SUCCESS, items};
}

export function createItemSuccess(item) {
    return {type: types.CREATE_ITEMS_SUCCESS, item};
}

import * as types from './actionTypes';

export function createItemSuccess(item) {
    return {type: types.CREATE_ITEMS_SUCCESS, item};
}

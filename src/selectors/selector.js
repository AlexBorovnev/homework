import { createSelector } from 'reselect';

const items = (state) => {
    return state.itemsReducers;
};

const itemsSelector = createSelector(
    items,
    (items) => {
        return items.map((item, index) => {return {number: index + 1, text: item};});
    }
);

export default itemsSelector;

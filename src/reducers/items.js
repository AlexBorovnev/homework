export default function itemsReducers(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state, action.text
      ];
    default:
      return state;
  }
}
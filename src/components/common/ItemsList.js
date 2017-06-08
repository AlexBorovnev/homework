import React from 'react';
import Item from './Item'

const ItemsList = ({items}) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => <Item item={item} />)}
      </ul>
    </div>
  );
};

export default ItemsList;
import React from 'react';
import Item from './Item'

const ItemsList = ({items}) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => <Item key={index} item={item} />)}
      </ul>
    </div>
  );
};

export default ItemsList;
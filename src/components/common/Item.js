import React from 'react';

const Item = ({item}) => {
  return (
    <li key={item.number}>{`${item.number}: ${item.text}`}</li>
  );
};

export default Item;
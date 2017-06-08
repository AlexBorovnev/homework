import React from 'react';

const Item = ({item}) => {
  return (
    <li>{`${item.number}: ${item.text}`}</li>
  );
};

export default Item;
import React from 'react';

const Button = ({type, onClick}) => {
  return (
    <button onClick={onClick} type={type}>
      <span className="button-img"></span>
    </button>
  );
};

export default Button;
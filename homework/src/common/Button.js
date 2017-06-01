import React, {PropTypes} from 'react';

const Button = ({type, content, onClick}) => {
    return (
        <button onClick={onClick} type={type}>{content}</button>
    );
};

Button.PropTypes = {
    type: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;
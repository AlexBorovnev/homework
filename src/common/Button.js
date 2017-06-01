import React, {PropTypes} from 'react';

const Button = ({type, onClick}) => {
    return (
        <button onClick={onClick} type={type}>
            <span className="button-img"></span>
        </button>
    );
};

Button.PropTypes = {
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;
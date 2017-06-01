import React from 'react';

const InputField = ({item}) => {
    return (
        <input type="text" name="add_item" value={item.name} />
    );
};

export default InputField;
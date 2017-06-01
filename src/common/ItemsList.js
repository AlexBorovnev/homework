import React, {PropTypes} from 'react';

const ItemsList = ({items}) => {
    return (
        <div>
            <ul>
                {items.map((item, index) => <li key={item.number}>{`${item.number}: ${item.text}`}</li>)}
            </ul>
        </div>
    );
};

ItemsList.PropTypes = {
    items: PropTypes.array.isRequired
};

export default ItemsList;
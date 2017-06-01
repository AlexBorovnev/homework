import React, {PropTypes} from 'react';

const ItemsList = ({items}) => {
    return (
        <div>
            <ul>
                {items.map((item, index) => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    );
};

ItemsList.PropTypes = {
    items: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired
};

export default ItemsList;
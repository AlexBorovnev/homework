import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import Button from '../../common/Button';
import ItemsList from '../../common/ItemsList';
import itemsSelector from '../../selectors/selector';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        browserHistory.push('/add');
    }
    render() {
        const {items} = this.props;
        return (
            <div>
                <h1>Items List</h1>
                <ItemsList items={items} />
                <Button
                type="button"
                content="Add"
                onClick={this.onClick}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        items: itemsSelector(state)
    };
}

HomePage.PropTypes = {
    items: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(HomePage);
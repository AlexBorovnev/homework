import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {loadItemsSuccess} from '../../actions/itemsAction';

import Button from '../../common/Button';
import ItemsList from '../../common/ItemsList';

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
        items: state.items || []
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loadItemsSuccess, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
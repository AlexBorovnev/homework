import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as itemsAction from '../../actions/itemsAction';
import Button from '../../common/Button';
import InputField from '../../common/InputField';


class AddPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: Object.assign({}, props.item)
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.actions.createItemSuccess(this.state.item);
        browserHistory.push('/');
    }
    render() {
        const {item} = this.props;
        return (
            <div>
                <h1>Add Item</h1>
                <InputField item={item} />
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
    const itemId = state.items ? state.items.length : 0;
    return {
        item: {id: itemId, name: ''}
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(itemsAction, dispatch)
    };
}

AddPage.propTypes = {
    item: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPage);
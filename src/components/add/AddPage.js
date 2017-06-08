import React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addItem} from '../../actions/index';
import Button from '../common/Button';
import InputField from '../common/InputField';


class AddPage extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.addItem(document.getElementsByTagName('input')[0].value);
    browserHistory.push('/');
  }
  render() {
    return (
      <div>
        <h1>Add Item</h1>
        <InputField />
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
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: bindActionCreators(addItem, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPage);
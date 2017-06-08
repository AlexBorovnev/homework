import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import Button from '../common/Button';
import ItemsList from '../common/ItemsList';
import itemsSelector from '../../selectors/selectors';

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

export default connect(mapStateToProps)(HomePage);
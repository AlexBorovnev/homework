import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App';
import ListPage from './components/list/ListPage';
import AddPage from './components/add/AddPage';

export default (
  <Route path="/" component={App}>
    <Route component={ListPage} />
    <Route path="add" component={AddPage}/>
  </Route>
);
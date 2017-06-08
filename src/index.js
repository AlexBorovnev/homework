import 'babel-polyfill';
import React from 'react';
import configureStore from './store/configureStore';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
const store = configureStore();
render (
  <Provider store={store} >
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);


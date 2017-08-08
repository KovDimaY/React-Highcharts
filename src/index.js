// Node modules import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

// Components import
import routes from './routes';

// Style import
import '../styles/index.scss';

ReactDOM.render(
  <Provider>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.querySelector('#react-app')
);

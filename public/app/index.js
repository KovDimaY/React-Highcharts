// Node modules import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

// Components import
import routes from '../../../routes/react-routes.js';

// Reducers import
import reducers from './reducers/index.js';

// Store definition with Middleware applying and Rendering of React DOM
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.querySelector('#app')
);

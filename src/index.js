// Node modules import
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

// Components import
import routes from './routes';

// Style import
import '../styles/index.scss';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.querySelector('#react-app')
);

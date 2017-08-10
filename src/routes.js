// Node modules import
import React from 'react';
import { Router, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import Home from './components/home';
import Line from './components/charts/line';
// import About from './components/about';
// import Contact from './components/contact';
// import NotFound from './components/not-found';

// Routes definition
export default (
  <Router path='/' component={App}>
    <IndexRoute component={Home} />
    <Router path='/line' component={Line} />
    <Router path='*' component={Home} />
  </Router>
);

// Node modules import
import React from 'react';
import { Router, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import Home from './components/home';
// import About from './components/about';
// import Contact from './components/contact';
// import NotFound from './components/not-found';

// Routes definition
export default (
  <Router path='/' component={App}>
    <IndexRoute component={Home} />
    <Router path='*' component={Home} />
  </Router>
);

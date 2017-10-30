// Node modules import
import React from 'react';
import { Router, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import Home from './components/home';
import Line from './components/charts/line';
import Bar from './components/charts/bar';
import Pie from './components/charts/pie';
import Scattering from './components/charts/scatter';
import Gauge from './components/charts/gauge';
import Combo from './components/charts/combo';
import Clock from './components/charts/clock';
import NotFound from './components/notFound';

// Routes definition
export default (
  <Router path='/' component={App}>
    <IndexRoute component={Home} />
    <Router path='/line' component={Line} />
    <Router path='/bar' component={Bar} />
    <Router path='/pie' component={Pie} />
    <Router path='/scatter' component={Scattering} />
    <Router path='/gauge' component={Gauge} />
    <Router path='/combo' component={Combo} />
    <Router path='/clock' component={Clock} />
    <Router path='*' component={NotFound} />
  </Router>
);

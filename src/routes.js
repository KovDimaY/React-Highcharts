// Node modules import
import React from 'react';
import { Router, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import Home from './components/home';
import Line from './components/charts/line';
import Bar from './components/charts/bar';
import Pie from './components/charts/pie';
import Bubble from './components/charts/bubble';
import Scattering from './components/charts/scatter';
import Gauge from './components/charts/gauge';

// Routes definition
export default (
  <Router path='/' component={App}>
    <IndexRoute component={Home} />
    <Router path='/line' component={Line} />
    <Router path='/bar' component={Bar} />
    <Router path='/pie' component={Pie} />
    <Router path='/bubble' component={Bubble} />
    <Router path='/scatter' component={Scattering} />
    <Router path='/gauge' component={Gauge} />
    <Router path='*' component={Home} />
  </Router>
);

// Node modules import
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Components import
import App from './components/app';
import Home from './components/home';
import Line from './components/charts/line';
import Bar from './components/charts/bar';
import Pie from './components/charts/pie';
import Scattering from './components/charts/scatter';
import Other from './components/charts/other';
import Playground from './components/charts/playground';
import NotFound from './components/notFound';

// Routes definition
export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/line' component={Line} />
    <Route path='/bar' component={Bar} />
    <Route path='/pie' component={Pie} />
    <Route path='/scatter' component={Scattering} />
    <Route path='/other' component={Other} />
    <Route path='/playground' component={Playground} />
    <Route path='*' component={NotFound} />
  </Route>
);

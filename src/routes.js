import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Bar from './components/charts/bar';
import Home from './components/home';
import Line from './components/charts/line';
// import NotFound from './components/notFound'; // TODO: fix router and use 404 instead of index
import Other from './components/charts/other';
import Pie from './components/charts/pie';
import Playground from './components/charts/playground';
import Scattering from './components/charts/scatter';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/line" component={Line} />
    <Route path="/bar" component={Bar} />
    <Route path="/pie" component={Pie} />
    <Route path="/scatter" component={Scattering} />
    <Route path="/other" component={Other} />
    <Route path="/playground" component={Playground} />
    <Route path="*" component={Home} />
    {/* <Route path="*" component={NotFound} /> */}
  </Route>
);

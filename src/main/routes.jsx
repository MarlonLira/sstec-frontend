import React from 'react';
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router';
import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';
import Product from '../product/product';
import Client from '../client/client';
import Components from '../component/components';
import AuthOrApp from '../auth/authOrApp';

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={AuthOrApp}>
      <IndexRoute component={Dashboard} />
      <Route path='/billingCycles' component={BillingCycle} />
      <Route path='/products' component={Product} />
      <Route path='/clients' component={Client} />
      <Route path='/components' component={Components} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);
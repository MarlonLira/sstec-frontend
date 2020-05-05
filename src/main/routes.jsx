import React from 'react';
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router';
import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';
import Product from '../product/product';
import Employee from '../employee/employee';
import Components from '../component/components';
import AuthOrApp from '../auth/authOrApp';
import Company from '../company/company';
import Scheduling from '../scheduling/scheduling';
import Parking from '../parking/parking';
import ParkingSpace from '../parkingSpace/parkingSpace';

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={AuthOrApp}>
      <IndexRoute component={Dashboard} />
      <Route path='/employee' component={Employee} />
      <Route path='/components' component={Components} />
      <Route path='/company' component={Company} />
      <Route path='/schedulings' component={Scheduling} />
      <Route path='/parking' component={Parking} />
      <Route path='/parkingSpace' component={ParkingSpace} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);
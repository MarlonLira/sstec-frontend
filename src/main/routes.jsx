import React from 'react';
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router';
import Dashboard from '../dashboard/dashboard';
import Employee from '../employee/employee';
import Components from '../component/components';
import AuthOrApp from '../auth/authOrApp';
import Company from '../company/company';
import Scheduling from '../scheduling/scheduling';
import Parking from '../parking/parking';
import ParkingSpace from '../parkingSpace/parkingSpace';
import Rule from '../rule/rule';
import SignIn from '../auth/signin';
import SignUp from '../auth/signup';
import RetrieveAccount from '../auth/retrieveAccount';

export default props => (
  <Router history={hashHistory}>
    <Route path="/signin" component={SignIn}  />
    <Route path="/signup" component={SignUp} />
    <Route path="/retrieveAccount" component={RetrieveAccount} />

    <Route path="/" component={AuthOrApp}>
      <IndexRoute component={Dashboard} />
      <Route path='/employee' component={Employee} />
      <Route path='/components' component={Components} />
      <Route path='/company' component={Company} />
      <Route path='/schedulings' component={Scheduling} />
      <Route path='/parking' component={Parking} />
      <Route path='/parkingSpace' component={ParkingSpace} />
      <Route path='/rule' component={Rule} />
    </Route>
    <Redirect from="*" to="/" />
  </Router>
);
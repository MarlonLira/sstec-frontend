import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Dashboard from '../view/dashboard';
import Client from '../view/client/client';

export default props => (
  <Router history ={hashHistory}>
    <Route path='/' component={Dashboard} />
    <Route path='/clients' component={Client} />
    <Redirect from='*' to='/' />
  </Router>
);
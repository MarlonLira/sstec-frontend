import '../common/template/dependencies/dependencies';
import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../main/app';
import Auth from './auth';
import { validateToken, logout } from './authActions';
import { IsValid } from '../common/functions/properties';
import { IsNeedRefresh } from '../common/functions/page';

class AuthOrApp extends Component {
  componentWillMount() {
    IsNeedRefresh(false);
    if (this.props.auth.employee && this.props.auth.token) {
      this.props.validateToken(this.props.auth.token);
    }
  }

  render() {
    const { token, validToken, employee } = this.props.auth;
    if (validToken || employee) {
      axios.defaults.headers.common['authorization'] = token;
    }
    return (validToken || employee ? <App>{this.props.children}</App> : <Auth />);
  }
}

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken, logout, IsValid, IsNeedRefresh }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp);
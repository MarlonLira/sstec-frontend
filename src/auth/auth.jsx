import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, signup } from './authActions';

import Messages from '../common/msg/messages';
import AuthForm from './authForm';


class Auth extends Component {
  render() {
    return (
      <div className='login-form'>
        <div className="logo-image">
          <img src="logo.png" width="100" height="100" />
        </div>
        <div className="login-title">
          <h2>Simple Parking</h2>
        </div>
        <div>
          <div>
            <AuthForm />
          </div>
        </div>
        <Messages />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ login, signup }, dispatch);
export default connect(null, mapDispatchToProps)(Auth);
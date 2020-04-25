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
      <div>
        <div>
          <AuthForm />
        </div>
        <Messages />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ login, signup }, dispatch);
export default connect(null, mapDispatchToProps)(Auth);
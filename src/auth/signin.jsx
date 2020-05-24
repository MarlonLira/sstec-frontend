import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signin } from './authActions';
import SignInForm from './signinForm';

import logo from '../common/styles/images/img-4.png';

class SignIn extends Component {
  render() {
    return (
      <SignInForm />
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ signin }, dispatch);
export default connect(null, mapDispatchToProps)(SignIn);
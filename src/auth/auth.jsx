import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup } from './authActions';

import Messages from '../common/msg/messages';
import SignIn from './signin';

class Auth extends Component {
  render() {
    return (
      <div>
        <div>
          <SignIn />
        </div>
        <Messages />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ signup }, dispatch);
export default connect(null, mapDispatchToProps)(Auth);
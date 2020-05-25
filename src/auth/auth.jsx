import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from './signin';

class Auth extends Component {
  render() {
    return (
      <div>
        <div>
          <SignIn />
        </div>
      </div>
    );
  }
}

export default connect(null, null)(Auth);
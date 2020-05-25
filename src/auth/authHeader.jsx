import React from 'react';

export default props => (
  <div className="limiter">
    <div className="container-login100">
      <div className="wrap-login100">
        {props.children}
      </div>
    </div>
  </div>
);
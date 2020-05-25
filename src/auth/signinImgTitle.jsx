import React from 'react';
import logo from '../common/styles/images/img-4.png';

export default props => (
  <div className="login100-pic js-tilt" data-tilt>
    <div className="title-custom">
      <h3>
        Simple Parking
      </h3>
      <h6> seu carro seguro !</h6>
    </div>
    <img src={logo} alt="IMG" />
  </div>
);
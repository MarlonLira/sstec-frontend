import React from 'react';

export default props => (
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"></i></a>
    </li>
    {props.children}
  </ul>
);
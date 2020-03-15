import React from 'react';
import {Link} from 'react-router';

export default props => (
  <li className="nav-item">
    <Link  to={props.path} className="nav-link">
      <i className={`fa fa-${props.icon} nav-icon`}></i>
      <span>{props.label}</span>
    </Link>
  </li>
);
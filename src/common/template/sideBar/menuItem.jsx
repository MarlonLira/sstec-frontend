import React from 'react';
import {Link} from 'react-router';

export default props => (
  <li className="nav-item">
    <Link  to={props.path} className="nav-link">
      <i className={`nav-icon fa fa-${props.icon}`}></i>
      <p>{props.label}</p>
    </Link>
  </li>
);
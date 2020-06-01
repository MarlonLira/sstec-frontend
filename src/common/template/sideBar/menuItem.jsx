import React from 'react';

import { Link } from 'react-router';
import IF from '../../operator/if';
import { IsValid } from '../../functions/properties';

export default props => (
  <IF test={!IsValid(props.accessLevel) || props.authenticationLevel <= props.accessLevel}>
    <li className="nav-item">
      <Link to={props.path} className="nav-link">
        <i className={`nav-icon fa fa-${props.icon}`}></i>
        <p>{props.label}</p>
      </Link>
    </li>
  </IF>
);
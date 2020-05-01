import React from 'react';

export default props => (
  <li className="nav-item d-none d-sm-inline-block">
    <a href={props.source} className="nav-link navbar-item-custom">{props.label}</a>
  </li>
);

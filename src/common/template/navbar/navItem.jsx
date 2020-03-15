import React from 'react';

export default props => (
  <li className="nav-item d-none d-sm-inline-block">
    <a href={props.source} className="nav-link">{props.label}</a>
  </li>
);

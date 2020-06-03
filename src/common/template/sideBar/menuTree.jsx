import React from 'react';

import IF from '../../operator/if';
import { IsValid } from '../../functions/properties';

export default props => (
  <IF test={!IsValid(props.accessLevel) || (IsValid(props.authenticationLevel) && props.authenticationLevel <= props.accessLevel)}>
    <li className='nav-item has-treeview menu' >
      <a href='#' className='nav-link'>
        <i className={`nav-icon fa fa-${props.icon}`}></i>
        <p> {props.label}
          <i className={'right fas fa-angle-left'}></i>
        </p>
      </a>
      <ul className='nav nav-treeview'>
        {props.children}
      </ul>
    </li>
  </IF>
);
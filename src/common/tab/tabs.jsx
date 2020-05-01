import React from 'react';
import './tab.css';

export default props => (
  <div className='card card-primary card-outline card-outline-tabs'>
      {props.children}
  </div>
)
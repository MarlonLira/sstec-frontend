import React from 'react';

export default props => (
  <div className='card-header p-0 border-bottom-0'>
    <ul className='nav nav-tabs' role='tablist'>
      {props.children}
    </ul>
  </div>
)
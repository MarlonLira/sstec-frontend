import React from 'react';

export default props => (
  <div id="SideLogBody">
    <a href="#" className="brand-link">
      <span id="SideLog" className='brand-image img-circle'><i className={`fa fa-${props.icon}`}></i></span>
      <span className="brand-text font-weight-light">{props.text}</span>
    </a>
    <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">

    </div>
  </div>
);
import React from 'react';

export default props => (
  <div className="panel panel-default">
    <div className="panel-heading">
      <h3 className="panel-title">{props.name}</h3>
    </div>
    <div className="panel-body">
      {props.children}
    </div>
  </div>
);
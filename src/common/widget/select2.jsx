import React from 'react';

export default props => (
  <select title={props.title} className="selectpicker">
    <option>Select...</option>
    {props.children}
    <option>Three</option>
  </select>
);
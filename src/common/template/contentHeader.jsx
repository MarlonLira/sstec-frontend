import React from 'react';

export default props => (
  <section className='content-header'>
    <div className="container-fluid">
        <h1>{props.title} <small>{props.small}</small></h1>
    </div>
  </section>
);
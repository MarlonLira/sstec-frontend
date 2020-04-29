import React from 'react';

export default props => (
  <div className="cardCustom">
    <div className="card">
      <div className="card-header border-transparent">
        <h3 className="card-title">{props.title}</h3>
        <div className="card-tools">
          <button type="button" className="btn btn-tool" data-card-widget="collapse">
            <i className="fas fa-minus"></i>
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div className="card-body p-0">
        {props.children}
      </div>
      <div className="card-footer clearfix">
        <a href="javascript:void(0)" className="btn btn-sm btn-primary float-right bg-purple">{props.btnName}</a>
      </div>
    </div>
  </div>
)
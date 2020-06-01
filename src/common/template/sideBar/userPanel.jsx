import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../../auth/authActions';
import { ReturnIfValid } from '../../functions/properties';

class UserPanel extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { employee, company } = this.props.auth;
    return (
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <i className='fa fa-user img-circle icon-employee' ></i>
          <i className='fab fa-black-tie img-circle icon-company' ></i>
        </div>
        <div className="info user-text">
          <a href="#" className="d-block" >{ReturnIfValid(employee.name, 'Employee Name')}</a>
          <a href="#" className="d-block company-label" >{ReturnIfValid(company.name, 'Company Name')}</a>
        </div>
        <div>
          <a className="fas fa-sign-out-alt logout-icon" id="logoutIcon" href="#" onClick={this.props.logout} ></a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });
const mapDispatchToProps = dispatch => bindActionCreators({ logout, ReturnIfValid }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
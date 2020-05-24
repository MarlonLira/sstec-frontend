import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getList, showUpdate, showDelete, showCreate } from './companyActions';
import './style.css'

class ProfileCompany extends Component {

  componentWillMount() {
    this.props.getList();
    this.props.showCreate();
  }

  renderCompany() {
    const list = this.props.list || [];
    return list.map(company => (
      <div key = {company.id}>
        <h1>{company.name}</h1>
        <h1>{company.registryCode}</h1>
        <h1>{company.phone}</h1>
      </div>
    ))
  }
  render() {
    return (
      <div className='containerCompany'>
        {this.renderCompany()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ list: state.company.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showDelete, showUpdate, showCreate }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProfileCompany);
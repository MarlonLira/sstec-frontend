import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {CreateMaskText, Mask} from '../common/functions/util';
import { getList, showUpdate, showDelete, showCreate } from './employeeActions';

class EmployeeList extends Component {

  componentWillMount() {
    this.props.getList();
    this.props.showCreate();
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map(employee => (
      <tr key={employee.id}>
        <td>{employee.name}</td>
        <td>{CreateMaskText(employee.registryCode, Mask.USER_REGISTRY_CODE)}</td>
        <td>{CreateMaskText(employee.phone, Mask.PHONE)}</td>
        <td>{employee.email}</td>
        <td className='table-actions'>
          <button type="button" className='btn btn-warning' onClick={() => this.props.showUpdate(employee)}>
            <i className='fa fa-paint-brush'></i>
          </button>
          <button type="button" className='btn btn-danger' onClick={() => this.props.showDelete(employee)}>
            <i className='fa fa-trash'></i>
          </button>
        </td>
      </tr>
    ))
  }
  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Funcionário</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({ list: state.employee.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showDelete, showUpdate, showCreate }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
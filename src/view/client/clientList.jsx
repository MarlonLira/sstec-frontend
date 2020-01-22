import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList, showUpdate, showDelete, showCreate } from '../../action/clientActions';

class ClientList extends Component {

  componentWillMount() {
    this.props.getList();
    this.props.showCreate();
  }

  renderRows() {
    const list = this.props.list.result || [];
    console.log(list.result);
    return list.map(client => (
      <tr key={client.id}>
        <td>{`${client.firstName} ${client.lastName}`}</td>
        <td>{client.registryCode}</td>
        <td>{client.phone}</td>
        <td className='table-actions'>
          <button className='btn btn-warning' onClick={() => this.props.showUpdate(client)}>
            <i className='fa fa-pencil'></i>
          </button>
          <button className='btn btn-danger' onClick={() => this.props.showDelete(client)}>
            <i className='fa fa-trash-o'></i>
          </button>
        </td>
      </tr>
    ));
  }
  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Telefone</th>
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

const mapStateToProps = state => ({ list: state.client.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showDelete, showUpdate, showCreate }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ClientList);
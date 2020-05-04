import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList, showUpdate, showDelete, showCreate } from './parkingActions';

class ParkingList extends Component {

  componentWillMount() {
    this.props.getList();
    this.props.showCreate();
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map(parking => (
      <tr key={parking.id}>
        <td>{parking.name}</td>
        <td>{parking.registryCode}</td>
        <td>{parking.phone}</td>
        <td>{parking.email}</td>
        <td>{parking.amount || 0}</td>
        <td className='table-actions'>
          <button type="button" className='btn btn-warning' onClick={() => this.props.showUpdate(parking)}>
            <i className='fa fa-paint-brush'></i>
          </button>
          <button type="button" className='btn btn-danger' onClick={() => this.props.showDelete(parking)}>
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
              <th>Estacionamento</th>
              <th>CNPJ</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Vagas</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({ list: state.parking.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showDelete, showUpdate, showCreate }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ParkingList);
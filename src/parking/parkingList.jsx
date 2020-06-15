import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CreateMaskText, Mask } from '../common/functions/util'

import { getList, getAddress, showUpdate, showDelete, showCreate } from './parkingActions';

class ParkingList extends Component {

  componentWillMount() {
    this.props.getList();
    this.props.showCreate();
  }

  showData(parking, method) {
    var newAddress;
    this.props.getAddress(parking.id).then(() => {
      const address = this.props.listAddress || [];
      if (address) {
        newAddress = {
          companyId: parking.companyId,
          email: parking.email,
          id: parking.id,
          name: parking.name,
          phone: parking.phone,
          registryCode: parking.registryCode,
          status: parking.status,
          imgUrl: parking.imgUrl
        }
      }
      address.map(data => (
        newAddress = {
          idAddress: data.id,
          zipCode: data.zipCode,
          street: data.street,
          number: data.number,
          district: data.district,
          country: data.country,
          state: data.state,
          city: data.city,
          complement: data.complement,
          latitude: data.latitude,
          longitude: data.longitude,
          companyId: parking.companyId,
          email: parking.email,
          id: parking.id,
          name: parking.name,
          phone: parking.phone,
          registryCode: parking.registryCode,
          status: parking.status,
          imgUrl: parking.imgUrl
        }

      ))
      if (method == 'put') {
        this.props.showUpdate(newAddress);
      } else if (method == 'delete') {
        this.props.showDelete(newAddress);
      }
    });
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map(parking => (
      <tr key={parking.id}>
        <td>{parking.name}</td>
        <td>{CreateMaskText(parking.registryCode, Mask.COMPANY_REGISTRY_CODE)}</td>
        <td>{CreateMaskText(parking.phone, Mask.PHONE)}</td>
        <td>{parking.email}</td>
        <td>{parking.amount || 0}</td>
        <td className='table-actions'>
          <button type="button" className='btn btn-warning' onClick={() => { this.showData(parking, 'put') }}>
            <i className='fa fa-paint-brush'></i>
          </button>
          <button type="button" className='btn btn-danger' onClick={() => { this.showData(parking, 'delete') }}>
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

const mapStateToProps = state => ({ list: state.parking.list, listAddress: state.parking.listAddress });
const mapDispatchToProps = dispatch => bindActionCreators({ getList, getAddress, showDelete, showUpdate, showCreate }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ParkingList);
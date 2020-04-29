import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList } from './requestActions';

class RequestList extends Component {

  componentWillMount() {
    this.props.getList();
  }

  renderRows() {

    const temporaryList = [{
      "id": 1223,
      "user": "Gustavo Gusmão",
      "licensePlate": "MNS8195",
      "avaliableTime": "29/04/2020 14:00:00",
      "unavailableTime": "29/04/2020 17:00:00",
      "status": "Aprovado",
    },
    {
      "id": 1224,
      "user": "Marlon Lira",
      "licensePlate": "JPV1257",
      "avaliableTime": "29/04/2020 17:00:00",
      "unavailableTime": "29/04/2020 19:00:00",
      "status": "Aprovado"
    },
    {
      "id": 1225,
      "user": "Emerson Gabriel",
      "licensePlate": "PNU8177",
      "avaliableTime": "30/04/2020 08:00:00",
      "unavailableTime": "30/04/2020 12:00:00",
      "status": "Aprovado",
    },
    {
      "id": 1226,
      "user": "Timoteo Barros",
      "licensePlate": "JKL2997",
      "avaliableTime": "30/04/2020 13:00:00",
      "unavailableTime": "30/04/2020 15:00:00",
      "status": "Aprovado",
    },
    {
      "id": 1227,
      "user": "Felipe Seabra",
      "licensePlate": "IUO8000",
      "avaliableTime": "01/05/2020 05:00:00",
      "unavailableTime": "01/05/2020 10:00:00",
      "status": "Aprovado",
    }
    ]

    const list = temporaryList;
    return list.map(scheduling => (
      <tr key={scheduling.id}>
        <td><a href="#">{scheduling.id}</a></td>
        <td>{scheduling.user}</td>
        <td>{scheduling.licensePlate}</td>
        <td><div className="sparkbar" data-color="#00a65a" data-height="20">{scheduling.avaliableTime}</div></td>
        <td><div className="sparkbar" data-color="#00a65a" data-height="20">{scheduling.unavailableTime}</div></td>
        <td><span className="badge badge-success">{scheduling.status}</span></td>
      </tr>
    ))
  }
  render() {
    return (
      <div className="table-responsive">
        <table className='table m-0'>
          <thead>
            <tr>
              <th>Pedido ID</th>
              <th>Usuario</th>
              <th>Placa</th>
              <th>Entrada</th>
              <th>Saida</th>
              <th>Status</th>
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

const mapStateToProps = state => ({ list: state.request.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(RequestList);
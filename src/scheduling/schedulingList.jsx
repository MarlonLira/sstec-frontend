import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList } from './schedulingActions';
import { GetTime } from '../common/functions/properties';

class SchedulingList extends Component {

  componentWillMount() {
    this.props.getList();
  }

  renderRows() {

    const temporaryList = [{
      "id": 1223,
      "userName": "Gustavo Gusmão",
      "vehiclePlate": "MNS8195",
      "avaliableTime": "29/04/2020 14:00:00",
      "unavailableTime": "29/04/2020 17:00:00",
      "status": "Aprovado",
    },
    {
      "id": 1224,
      "userName": "Marlon Lira",
      "vehiclePlate": "JPV1257",
      "avaliableTime": "29/04/2020 17:00:00",
      "unavailableTime": "29/04/2020 19:00:00",
      "status": "Aprovado"
    },
    {
      "id": 1225,
      "userName": "Emerson Gabriel",
      "vehiclePlate": "PNU8177",
      "avaliableTime": "30/04/2020 08:00:00",
      "unavailableTime": "30/04/2020 12:00:00",
      "status": "Aprovado",
    },
    {
      "id": 1226,
      "userName": "Timoteo Barros",
      "vehiclePlate": "JKL2997",
      "avaliableTime": "30/04/2020 13:00:00",
      "unavailableTime": "30/04/2020 15:00:00",
      "status": "Aprovado",
    },
    {
      "id": 1227,
      "userName": "Felipe Seabra",
      "vehiclePlate": "IUO8000",
      "avaliableTime": "01/05/2020 05:00:00",
      "unavailableTime": "01/05/2020 10:00:00",
      "status": "Aprovado",
    }
    ]

    const list = this.props.list.length <= 0 ? temporaryList : this.props.list;
    return list.map(scheduling => (
      <tr key={scheduling.id}>
        <td><a href="#">{scheduling.id}</a></td>
        <td>{scheduling.userName}</td>
        <td>{scheduling.vehiclePlate}</td>
        <td>{scheduling.date}</td>
        <td><div className="sparkbar" data-color="#00a65a" data-height="20">{GetTime(scheduling.avaliableTime)}</div></td>
        <td><div className="sparkbar" data-color="#00a65a" data-height="20">{GetTime(scheduling.unavailableTime)}</div></td>
        <td><span className="badge badge-success">{scheduling.status == "AT" ? "Aprovado" : "Pendente"}</span></td>
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
              <th>Data</th>
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

const mapStateToProps = state => ({ list: state.scheduling.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList, GetTime }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SchedulingList);
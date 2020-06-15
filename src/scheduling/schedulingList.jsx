import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getList } from './schedulingActions';
import { GetTime } from '../common/functions/properties';
import Consts from '../consts';
import io from 'socket.io-client'
import icon from '../common/styles/images/logo.png'

const BASE_URL = Consts.API_URL;
const socket = io(BASE_URL);
socket.on('connect', () => console.log('[IO] Connect => A new connection as has ben established'));

class SchedulingList extends Component {

  componentWillMount() {
    this.props.getList();
    this.callScheduling();
  }

  callScheduling() {
    socket.on('get.schedulings', (data) => {
      this.props.getList();
      this.notification(data);
    })
  }

  notification(data){
    if(Notification.permission === 'granted') {
      let notification = new Notification('Novo Agendamento', {
        icon: icon,
        body: 'Ususário: Teste'
      });

      setTimeout(() => {
        if (notification) notification.close();
      }, 5000);
    }
  }

  renderRows() {
    const list = this.props.list.length <= 0 ? [] : this.props.list;
    return list.map(scheduling => (
      <tr key={scheduling.id}>
        <td><a href="#">{scheduling.id}</a></td>
        <td>{scheduling.userName}</td>
        <td>{scheduling.vehiclePlate}</td>
        <td>{scheduling.date}</td>
        <td><div className="sparkbar" data-color="#00a65a" data-height="20">{GetTime(scheduling.avaliableTime)}</div></td>
        <td><div className="sparkbar" data-color="#00a65a" data-height="20">{GetTime(scheduling.unavailableTime)}</div></td>
        <td><span className={`badge badge-${scheduling.status == "AT" ? 'success' : 'warning'}`}>{scheduling.status == "AT" ? "Aprovado" : "Pendente"}</span></td>
      </tr >
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
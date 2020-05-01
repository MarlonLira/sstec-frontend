import React, { Component } from 'react';
import Select from '../common/widget/select/select';

class Components extends Component {

  render() {
    return (
      <div className="cardCustom">
        <div className="card">
          <div className="card-header border-transparent">
            <h3 className="card-title">Pedidos</h3>
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
            <div className="table-responsive">
              <table className="table m-0">
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
                  <tr>
                    <td><a href="#">9842</a></td>
                    <td>Marlon Lira</td>
                    <td>DIY6719</td>
                    <td><div className="sparkbar" data-color="#00a65a" data-height="20">28/04/2020 14:00:00</div></td>
                    <td><div className="sparkbar" data-color="#00a65a" data-height="20">28/04/2020 16:00:00</div></td>
                    <td><span className="badge badge-success">Aprovado</span></td>
                  </tr>
                  <tr>
                    <td><a href="#">9843</a></td>
                    <td>Gustavo Gusmão</td>
                    <td>DIY6719</td>
                    <td><div className="sparkbar" data-color="#00a65a" data-height="20">28/04/2020 15:00:00</div></td>
                    <td><div className="sparkbar" data-color="#00a65a" data-height="20">28/04/2020 17:00:00</div></td>
                    <td><span className="badge badge-warning">Pendente</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer clearfix">
            <a href="javascript:void(0)" className="btn btn-sm btn-primary float-right bg-purple">Ver Tudo</a>
          </div>
        </div>
      </div>
    );
  }
}


export default Components;
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { getListSpace, getList, showUpdate, showDelete, showCreate } from './parkingSpaceActions';

import listParking from './listParking'

class ParkingList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      parkingId: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.getList();
    this.props.showCreate();
  }

  handleChange(e) {
    let parkingId = e.target.value
    if (parkingId != null && parkingId != '') {
      this.props.getListSpace(parkingId);
    }
  }

  renderList() {
    const list = this.props.list || [];
    return list.map(parking => (
      <option key={parking.id} value={parking.id}>{parking.name}</option>
    ))
  }

  renderRows() {
    const list = this.props.listParking || [];
    return list.map(parking => (
      <tr key={parking.id}>
        <td>{parking.type == 'CAR' ? 'Carro' : 'Moto'}</td>
        <td>R$ {parking.value}</td>
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

        <Field
          name='parkingId'
          component={listParking}
          required='true'
          label='Estacinamento'
          cols='12 6'
          options={this.renderList()}
          onChangeTeste={this.handleChange}
        />

        <table className='table'>
          <thead>
            <tr>
              <th>Tipo da vaga</th>
              <th>Valor</th>
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

const mapStateToProps = state => ({ listParking: state.parkingSpace.listParking, list: state.parkingSpace.list });
ParkingList = reduxForm({ form: 'ParkingList' })(ParkingList)
const mapDispatchToProps = dispatch => bindActionCreators({ getListSpace, getList, showDelete, showUpdate, showCreate }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ParkingList);
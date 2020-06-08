import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { getListSpace, getList, showUpdate, showDelete, showCreate, init } from './parkingSpaceActions';
import listParking from './listParking'

class ParkingList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      parkingId: '',
      buttonState: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.getList();
    this.props.showCreate();
  }

  handleChange(e) {
    let parkingId = e.target.value;
    this.setState({ parkingId })
    if (parkingId != null && parkingId != '') {
      this.props.getListSpace(parkingId);
    }
  }

  newCall() {
    this.setState({ buttonState: true })
    setTimeout(() => {
      if (this.state.parkingId != '') {
        this.props.getListSpace(this.state.parkingId);
      }
      this.setState({ buttonState: false })
    }, 500)
  }

  renderList() {
    const list = this.props.list || [];
    return list.map(parking => (
      <option key={parking.id} value={parking.id}>{parking.name}</option>
    ))
  }

  renderRows() {
    const { buttonState } = this.state;
    var amount;
    const list = this.props.listParking || [];
    var car = []
    var moto = []

    amount = list.length;

    const valor = list.map(space => {
      if (space.type == 'CAR') {
        car.push(space);
      } else {
        moto.push(space);
      }
      return space
    })

    return list.map(parking => (
      <tr key={parking.id}>
        <td>{parking.type == 'CAR' ? 'Carro' : (parking.type == 'MOTORCYCLE' ? 'Moto' : 'Mista')}</td>
        <td>R$ {parking.value}</td>
        <td>{parking.amount}</td>
        <td className='table-actions'>
          <button type="button"
            className='btn btn-danger'
            disabled={buttonState}
            onClick={() => this.props.showDelete(parking).then(() => { this.newCall() })}>
            <i className='fa fa-trash'></i>
          </button>
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <div className="row">
          <Field
            name='parkingId'
            component={listParking}
            required='true'
            label='Estacinamento'
            cols='12 6'
            options={this.renderList()}
            onChangeField={this.handleChange}
          />
          <div>
            <button type="button"
              className='btn btn-primary p-custom ppButton'
              onClick={() => this.newCall()}>
              <i className='fa fa-search margin-f-10'></i>
            </button>
          </div>
        </div>

        <table className='table'>
          <thead>
            <tr>
              <th>Tipo da vaga</th>
              <th>Valor</th>
              <th>Quantidade</th>
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
const mapDispatchToProps = dispatch => bindActionCreators({ getListSpace, getList, showDelete, showUpdate, showCreate, init }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ParkingList);
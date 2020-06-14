import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { getListSpace, getList, showUpdate, showDelete, showCreate, init, destroy } from './parkingSpaceActions';
import listParking from './listParking'
import Modal from 'react-modal';
import TextInput from '../common/widget/textInput';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class ParkingList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      parkingId: '',
      buttonState: false,
      modalIsOpen: false,
      valuesDelete: '',
      amountDelete: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  componentWillMount() {
    this.props.getList();
    this.props.showCreate();
  }

  openModal(values) {
    this.setState({ modalIsOpen: true, valuesDelete: values  });
  }

  closeModal() {
    this.setState({ modalIsOpen: false, valuesDelete: '', amountDelete: 0 });
  }

  handleChange(e) {
    let parkingId = e.target.value;
    this.setState({ parkingId })
    if (parkingId != null && parkingId != '') {
      this.props.getListSpace(parkingId);
    }
  }

  handleChangeText(e){
    let amountDelete = e.target.value;
    this.setState({ amountDelete });
  } 

  subtract(){
    return (this.state.valuesDelete.amount - this.state.amountDelete);
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

  onSubmit(values){
    this.props.showDelete(this.state.valuesDelete, values)
    .then(() => { 
      this.newCall();
      this.closeModal();
    });
  }

  renderMordal() {
    const values = this.state.valuesDelete || '';
    if (values) {
      const { handleSubmit } = this.props;
      return (
        <Modal
          isOpen={this.state.modalIsOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Atenção</h2>
          <hr />
          <div>Informe a quantidade de vagas para exclusão</div>
          <div><span>
            Tipo: {this.state.valuesDelete.type == 'CAR' ? 'Carro' : (values.type == 'MOTORCYCLE' ? 'Moto' : 'Mista')} |
            Quantidade: {this.subtract() < 0 ? 0 : this.subtract()} |
            Valor R$: {this.state.valuesDelete.value}
          </span></div>
          <form onSubmit={handleSubmit(v => this.onSubmit(v))}> 
            <div className='row'>
              <Field
                name='amount'
                component={TextInput}
                label='Quantidade:'
                cols='12 12'
                readOnly={false}
                required='true'
                type='number'
                valueField={this.state.amountDelete}
                onChangeField={this.handleChangeText}
              />
            </div>
            <div className='box-footer'>
              <button type="submit" className="btn btn-danger">
                Excluir
              </button>
              <button type='button' className='btn btn-default'
                onClick={() => this.closeModal()}>
                Cancelar
              </button>
            </div>
          </form>
        </Modal>
      )
    }
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
            onClick={() => this.openModal(parking)}>
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
            {this.renderMordal()}
          </tbody>
        </table>
      </div>
    );
  }
}

Modal.setAppElement('#app')
const mapStateToProps = state => ({ listParking: state.parkingSpace.listParking, list: state.parkingSpace.list });
ParkingList = reduxForm({ form: 'ParkingList' })(ParkingList)
const mapDispatchToProps = dispatch => bindActionCreators({ getListSpace, getList, showDelete, showUpdate, showCreate, init, destroy }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ParkingList);
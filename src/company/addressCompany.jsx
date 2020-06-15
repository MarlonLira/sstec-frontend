import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'
import { Mask, Pattern } from '../common/functions/util'
import TextInput from '../common/widget/textInput';
import { init, showUpdateAddress, getInfoAddress, addressUpdate } from './companyActions';
//import { Map, TileLayer, Marker } from 'react-leaflet'

class AddressCompany extends Component {

  constructor(props) {
    super(props);
    this.state = {
      read: false,
      method: ''
    }
  }

  componentWillMount() {
    this.props.getInfoAddress().then(() => {
      this.getData();
    });
  }

  initalState() {
    this.getData();
    this.props.init();
  }

  getData() {
    const list = this.props.list || [];
    if (list.length >= 1) {
      this.setState({ read: true, method: 'put' });
      list.map(address => (
        this.props.showUpdateAddress(address)
      ))
    } else {
      this.setState({ read: false, method: 'post' });
    }
  }

  onEdit() {
    this.setState({ read: false });
  }

  onSubmit(values, method) {
    addressUpdate(values, method).then(result => {
      if (result.type == 'SUCCESS') {
        this.setState({ read: true })
      }
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form role="form" onSubmit={handleSubmit(v => this.onSubmit(v, this.state.method))}>
        <div className="row">
          {/* <Map center={[-8.027604, -34.907023]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </Map> */}
          <Field
            name='zipCode'
            component={TextInput}
            required='true'
            label='Código postal'
            cols='12 4'
            readOnly={this.state.read}
            maxLength='100'
            placeholder=''
            type='text'
            pattern={Pattern.TEXT}
          />
          <Field
            name='street'
            component={TextInput}
            required='true'
            label='Rua'
            cols='12 4'
            readOnly={this.state.read}
            maxLength='100'
            placeholder=''
            type='text'
            pattern={Pattern.TEXT}
          />
          <Field
            name='number'
            component={TextInput}
            required='true'
            label='Número'
            cols='12 4'
            readOnly={this.state.read}
            maxLength='100'
            placeholder=''
            type='text'
          />
          <Field
            name='neighborhood'
            component={TextInput}
            required='true'
            label='Bairro'
            cols='12 4'
            readOnly={this.state.read}
            maxLength='100'
            placeholder=''
            type='text'
            pattern={Pattern.TEXT}
          />
          <Field
            name='country'
            component={TextInput}
            required='true'
            label='País'
            cols='12 4'
            readOnly={this.state.read}
            maxLength='100'
            placeholder=''
            type='text'
            pattern={Pattern.TEXT}
          />
          <Field
            name='state'
            component={TextInput}
            required='true'
            label='Estado'
            cols='12 4'
            readOnly={this.state.read}
            maxLength='100'
            placeholder=''
            type='text'
          />
          <Field
            name='city'
            component={TextInput}
            required='true'
            label='Cidade'
            cols='12 4'
            readOnly={this.state.read}
            maxLength='100'
            placeholder=''
            type='text'
            pattern={Pattern.TEXT}
          />
          <Field
            name='complement'
            component={TextInput}
            required='true'
            label='Complemento'
            cols='12 4'
            readOnly={this.state.read}
            maxLength='100'
            placeholder=''
            type='text'
          />
        </div>
        <div className='box-footer'>
          {this.state.read == false ?
            <button
              type='submit'
              className='btn btn-success'>
              Salvar
            </button>
            : null
          }
          {this.state.read == true ?
            <button
              type='button'
              className={`btn btn-${this.props.submitClass}`}
              onClick={() => { this.onEdit() }}>
              Editar
            </button>
          : null}
          <button
            type='button'
            className='btn btn-default'
            onClick={() => { this.initalState() }}>
            Cancelar
          </button>
        </div>
      </form>
    )
  }
}

AddressCompany = reduxForm({ form: 'addressForm' })(AddressCompany);
const mapStateToProps = state => ({ list: state.company.listAddress });
const mapDispatchToProps = dispatch => bindActionCreators({ init, showUpdateAddress, getInfoAddress, addressUpdate }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AddressCompany);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { create, update, destroy, getListSpace, getList } from './parkingSpaceActions';

import { init } from './parkingSpaceActions';
import listParking from './listParking'
import inputMask from '../common/form/inputCurrency';
import labelAndInput from '../common/form/labelAndInput'
import { replaceCodeNumber } from '../../src/common/functions/replace'



class ParkingSpaceForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      parkingId: '',
      type: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
  }

  componentWillMount() {
    this.props.getListSpace();
    this.props.getList();
  }

  handleChange(e) {
    this.setState({ parkingId: e.target.value })
  }

  handleChangeType(e) {
    this.setState({ type: e.target.value })
  }

  onSubmit(values) {
    let _values;
    let value = "";
    const { parkingId, type } = this.state;
    const { submitType } = this.props;

    if (values.value) {
      value = replaceCodeNumber(values.value);
    }

    _values = {
      "parkingSpace": {
        id: values.id ? values.id : '',
        value,
        type,
        parkingId,
        amount: values.amount
      }
    }

    switch (submitType) {
      case 'create':
        create(_values).then(() => {this.props.init()});
        break;
      case 'update':
        update(_values).then(() => {this.props.init()});
        break;
      case 'delete':
        destroy(_values).then(() => {this.props.init()});
        break;
    }
  }

  renderLines() {
    const list = [{ value: 'CAR', description: 'Carro' }, { value: 'MOTOCYCLE', description: 'Moto' }]
    return list.map(type => (
      <option key={type.value} value={type.value}>{type.description}</option>
    ))
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map(parking => (
      <option key={parking.id} value={parking.id}>{parking.name}</option>
    ))
  }

  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <form role='form' onSubmit={handleSubmit(v => this.onSubmit(v))}>
        <div className='row'>
          <Field
            name='parkingId'
            component={listParking}
            required='true'
            label='Estacinamento'
            cols='12 4'
            readOnly={readOnly}
            options={this.renderRows()}
            onChangeField={this.handleChange}
          />
          <Field
            name='type'
            component={listParking}
            label='Tipo'
            cols='12 4'
            readOnly={readOnly}
            required='true'
            options={this.renderLines()}
            onChangeField={this.handleChangeType}
          />
          <Field
            name='value'
            component={inputMask}
            label='Valor'
            cols='12 4'
            readOnly={readOnly}
            required='true'
            type='text'
          />
          <Field
            name='amount'
            component={labelAndInput}
            label='Quantidade'
            cols='12 4'
            readOnly={readOnly}
            required='true'
            type='number'
          />
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button type='button' className='btn btn-default'
            onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    )
  }
}


ParkingSpaceForm = reduxForm({ form: 'parkingSpaceForm' })(ParkingSpaceForm);
const mapStateToProps = state => ({ listParking: state.parkingSpace.listParking, list: state.parkingSpace.list, });
const mapDispatchToProps = dispatch => bindActionCreators({ init, getListSpace, getList }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ParkingSpaceForm);

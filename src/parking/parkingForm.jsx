import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { init } from './parkingActions';
import TextInput from '../common/widget/textInput';

import { Mask, Pattern } from '../common/functions/util';

class ParkingForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='row'>
          <Field
            name='name'
            component={TextInput}
            required='true'
            label='Nome'
            cols='12 4'
            readOnly={readOnly}
            maxLength='30'
            placeholder='Informe o nome do Estacionamento'
            type='text'
          />
          <Field
            name='registryCode'
            component={TextInput}
            cols='12 4'
            maxLength=''
            label='CPNJ'
            placeholder='CNPJ do Estacionamento'
            type='input'
            mask={Mask.COMPANY_REGISTRY_CODE}
            required='true'
            readOnly={readOnly}
          />
          <Field
            name='phone'
            component={TextInput}
            cols='12 4'
            maxLength='30'
            label="Telefone"
            placeholder=''
            type='tel'
            mask={Mask.PHONE}
            required='true'
            readOnly={readOnly}
          />
          <Field name='email'
            component={TextInput}
            label='Email'
            cols='12 4'
            readOnly={readOnly}
            maxLength='50'
            placeholder='Informe o E-mail do Estacionamento'
            type='email'
          />
          <Field
            name='imgUrl'
            component={TextInput}
            maxLength='100'
            label='Imagem'
            cols='12 4'
            readOnly={readOnly}
            maxLength='100'
            placeholder='Informe o link da imagem'
            type='text'
          />
        </div>
        <div className='row'>
          <div className="col-md-12 alternateTitle">
            <h3>Endereço</h3>
          </div>

          <Field
            name='zipCode'
            component={TextInput}
            required='true'
            label='Código postal'
            cols='12 4'
            readOnly={readOnly}
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
            readOnly={readOnly}
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
            readOnly={readOnly}
            maxLength='100'
            placeholder=''
            type='text'
          />
          <Field
            name='district'
            component={TextInput}
            required='true'
            label='Bairro'
            cols='12 4'
            readOnly={readOnly}
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
            readOnly={readOnly}
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
            readOnly={readOnly}
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
            readOnly={readOnly}
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
            readOnly={readOnly}
            maxLength='100'
            placeholder=''
            type='text'
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

ParkingForm = reduxForm({ form: 'parkingForm' })(ParkingForm);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(ParkingForm);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { init } from './parkingActions';
import labelAndInput from '../common/form/labelAndInput';

class ParkingForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='row'>
          <Field name='name' component={labelAndInput} required='true'
            label='Nome' cols='12 4' readOnly={readOnly} maxLength='30'
            placeholder='Informe o nome do produto' type='text'
          />
          <Field name='registryCode' component={labelAndInput}
            label='CPNJ' cols='12 4' readOnly={readOnly} maxLength='15'
            placeholder='Informe o codigo do produto' type='text' required='true'
          />
          <Field name='phone' component={labelAndInput}
            label='Telefone' cols='12 4' readOnly={readOnly}
            placeholder='Informe a quantidade do produto' type='number'
          />
          <Field name='email' component={labelAndInput}
            label='Email' cols='12 4' readOnly={readOnly}
            placeholder='Informe a data de cadastro do produto' type='email'
          />
          <Field name='amount' component={labelAndInput}
            label='Vagas' cols='12 4' readOnly={readOnly}
            placeholder='Informe a quantidade de vagas' type='number'
          />
          <Field name='imgUrl' component={labelAndInput}
            label='Imagem' cols='12 4' readOnly={readOnly} maxLength='100'
            placeholder='Informe o link da imagem' type='text'
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
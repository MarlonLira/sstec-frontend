import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { Mask, Pattern } from '../common/functions/util';
import TextInput from '../common/widget/textInput';

import { init } from './companyActions';

class CompanyForm extends Component {
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
            maxLength='50'
            placeholder='Nome da Empresa'
            type='text'
            pattern={Pattern.TEXT}
          />
          <Field
            name='registryCode'
            component={TextInput}
            label='CNPJ'
            cols='12 4'
            readOnly={readOnly}
            placeholder='CNPJ'
            type='text'
            required='true'
            pattern={Pattern.COMPANY_REGISTRY_CODE}
            mask={Mask.COMPANY_REGISTRY_CODE}
          />
          <Field
            name='phone'
            component={TextInput}
            label='Telefone'
            cols='12 4'
            readOnly={readOnly}
            required='true'
            placeholder='Informe o telefone da Empresa'
            type='tel'
            pattern={Pattern.PHONE}
            mask={Mask.PHONE}
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

CompanyForm = reduxForm({ form: 'companyForm' })(CompanyForm);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(CompanyForm);
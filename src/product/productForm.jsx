import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { init } from './productActions';
import labelAndInput from '../common/form/labelAndInput';

class ProductForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='row'>
          <Field name='name' component={labelAndInput} required='true'
            label='Produto' cols='12 4' readOnly={readOnly} maxLength='30'
            placeholder='Informe o nome do produto' type='text'
          />
          <Field name='code' component={labelAndInput}
            label='Codigo' cols='12 4' readOnly={readOnly} maxLength='12'
            placeholder='Informe o codigo do produto' type='text'
          />
          <Field name='amount' component={labelAndInput}
            label='Quantidade' cols='12 4' readOnly={readOnly} required='true'
            placeholder='Informe a quantidade do produto' type='number'
          />
          <Field name='date' component={labelAndInput}
            label='Data' cols='12 4' readOnly='true'
            placeholder='Informe a data de cadastro do produto' type='date'
          />
          <Field name='validity' component={labelAndInput}
            label='Validade' cols='12 4' readOnly={readOnly}
            placeholder='Informe a validade do produto' type='date'
          />
          <Field name='obs' component={labelAndInput}
            label='Obs' cols='12 4' readOnly={readOnly} maxLength='20'
            placeholder='Observações sobre o produto' type='text'
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

ProductForm = reduxForm({ form: 'productForm' })(ProductForm);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(ProductForm);
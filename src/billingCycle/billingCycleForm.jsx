import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { init } from './billingCycleActions';
import labelAndInput from '../common/form/labelAndInput';
import CreditList from './creditList';

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='row'>
          <Field name='clientId' component={labelAndInput}
            label='Cliente' cols='12 4' readOnly={readOnly}
            placeholder='Informe o id do Cliente' type='number'
          />
          <Field name='credit' component={labelAndInput}
            label='Credito' cols='12 4' readOnly={readOnly}
            placeholder='Informe o credito' type='number'
          />
          <Field name='debit' component={labelAndInput}
            label='Debito' cols='12 4' readOnly={readOnly}
            placeholder='Informe o Debito' type='number'
          />
          <Field name='date' component={labelAndInput}
            label='Data' cols='12 4' readOnly={readOnly}
            placeholder='Informe a Data' type='date'
          />
          <CreditList cols='12 4' readOnly={readOnly} />
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

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycleForm);
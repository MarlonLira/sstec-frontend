import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { init } from './ruleActions';
import TextInput from '../common/widget/textInput';

class RuleForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <form role='form' onSubmit={handleSubmit}>
        <div className='row'>
          <Field name='name' component={TextInput} required='true'
            label='Permissão' cols='12 4' readOnly={readOnly} maxLength='30'
            placeholder='Informe o nome da permissão' type='text'
          />
          <Field name='level' component={TextInput}
            label='Nível' cols='12 4' readOnly={readOnly} required='true'
            placeholder='Informe o nível' type='number'
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

RuleForm = reduxForm({ form: 'ruleForm' })(RuleForm);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(RuleForm);
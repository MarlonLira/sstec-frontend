import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { init } from './clientActions';
import labelAndInput from '../common/form/labelAndInput';

class ClientForm extends Component {
    render() {
        const { handleSubmit, readOnly } = this.props;
        return (
            <form role='form' onSubmit={handleSubmit}>
            <div className='row'>
                    <Field name='name' component={labelAndInput} required='true'
                        label='Nome' cols='12 4' readOnly={readOnly} maxLength='30'
                        placeholder='Informe o nome do cliente' type='text'
                    />
                    <Field name='registryCode' component={labelAndInput} pattern='\d{11,12}'
                        label='CPF' cols='12 4' readOnly={readOnly} maxLength='12'
                        placeholder='Informe o CPF do cliente' type='text' required='true'
                    />
                    <Field name='phone' component={labelAndInput} maxLength='12'
                        label='Telefone' cols='12 4' readOnly={readOnly} required='true'
                        placeholder='Informe o telefone do cliente' type='tel' pattern='\d{11,12}'
                    />
                    <Field name='email' component={labelAndInput} maxLength='50'
                        label='Email' cols='12 4' readOnly={readOnly} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        placeholder='Informe o email do cliente' type='text'
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

ClientForm = reduxForm({ form: 'clientForm' })(ClientForm);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(ClientForm);
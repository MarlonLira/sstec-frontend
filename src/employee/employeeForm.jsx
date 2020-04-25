import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { init } from './employeeActions';
import labelAndInput from '../common/form/labelAndInput';
import labelAndInputMask from '../common/form/labelAndInputMask';

class EmployeeForm extends Component {

    render() {
        const { handleSubmit, readOnly, hide, cadMode } = this.props;
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='row'>
                    <Field
                        name='name'
                        component={labelAndInput}
                        required='true'
                        label='Nome'
                        cols='12 4'
                        readOnly={readOnly}
                        maxLength='50'
                        placeholder='Informe o nome do funcionário'
                        type='text'
                    />
                    <Field
                        name='registryCode'
                        component={labelAndInputMask}
                        label='CPF'
                        cols='12 4'
                        readOnly={readOnly}
                        placeholder='Informe o CPF do funcionário'
                        type='text'
                        required='true'
                        mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/,]}
                    />
                    <Field
                        name='phone'
                        component={labelAndInputMask}
                        label='Telefone'
                        cols='12 4'
                        readOnly={readOnly}
                        required='true'
                        placeholder='Informe o telefone do funcionário' 
                        type='tel'
                        mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    />
                    <Field
                        name='email'
                        component={labelAndInput}
                        maxLength='50'
                        label='Email' 
                        cols='12 4'
                        readOnly={readOnly}
                        required='true'
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        placeholder='Informe o email do funcionário'
                        type='text'
                    />
                    <Field
                        label='Senha'
                        name='passwordEmployee'
                        component={labelAndInput}
                        cols='12 4'
                        readOnly={readOnly}
                        placeholder='Informe a senha do funcionário'
                        type='password'
                        hide={hide}
                        required={cadMode}
                    />
                    <Field
                        label='Confirmar senha'
                        name='confirmPassword'
                        component={labelAndInput}
                        cols='12 4'
                        readOnly={readOnly}
                        placeholder='Confirme a senha do funcionário'
                        type='password'
                        hide={hide}
                        required={cadMode}
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

EmployeeForm = reduxForm({ form: 'employeeform' })(EmployeeForm);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(null, mapDispatchToProps)(EmployeeForm);
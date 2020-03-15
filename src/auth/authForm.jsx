import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signin, signup } from './authActions';

import labelAndInput from '../common/form/labelAndInput';

class AuthForm extends Component {

  constructor(props) {
    super(props);
    this.state = { loginMode: true };
  }

  changeMode() {
    this.setState({ loginMode: !this.state.loginMode });
  };

  onSubmit(values) {
    let _values = {
      "token": "null",
      "validated": "false",
      "user": values
    };

    const { signin, signup } = this.props;
    this.state.loginMode ? signin(_values) : signup(_values);
  };

  render() {
    const { loginMode } = this.state;
    const { handleSubmit } = this.props;
    return (
      <form role='form' onSubmit={handleSubmit(v => this.onSubmit(v))} >
        <div className='row'>
          <Field name='name' component={labelAndInput} required='true'
            label='Nome' cols='12 12' maxLength='30' hide={loginMode}
            placeholder='Informe seu Nome' type='input'
          />
          <Field name='registryCode' component={labelAndInput} required='true'
            label='CPF' cols='12 12' maxLength='30' hide={loginMode}
            placeholder='Informe seu CPF' type='input'
          />
          <Field name='email' component={labelAndInput} required='true'
            label={loginMode ? 'Login' : 'Email'} cols='12 12' maxLength='30'
            placeholder='Informe seu email ou cpf' type={loginMode ? 'input' : 'email'}
          />
          <Field name='phone' component={labelAndInput} required='true'
            label='Telefone' cols='12 12' maxLength='30' hide={loginMode}
            placeholder='Informe seu email ou cpf' type='tel'
          />
          <Field name='password' component={labelAndInput}
            label='Senha' cols='12 12' required='true'
            placeholder='Informe sua senha' type='password'
          />
          <Field name='confirmPassword' component={labelAndInput}
            label='Confirmar Senha' cols='12 12' required='true' hide={loginMode}
            placeholder='Confirme sua senha' type='password'
          />
        </div>
        <div className='row'>
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Lembrar-Me
              </label>
            </div>
          </div>
          <div className="col-4">
            <button type='submit' className='btn btn-block btn-primary '>
              {loginMode ? 'Entrar' : 'Registrar'}
            </button>
          </div>
        </div>
        <p className="mb-1">
          <a href="forgot-password.html">Esqueci minha senha</a>
        </p>
        <p className="mb-0">
          <a href='#' className="text-center" onClick={() => this.changeMode()} >
            {loginMode ? 'Novo usuário? Registrar aqui!' :
              'Já é cadastrado? Entrar aqui!'}
          </a>
        </p>
      </form>
    )
  }
}

AuthForm = reduxForm({ form: 'authForm' })(AuthForm);
const mapDispatchToProps = dispatch => bindActionCreators({ signin, signup }, dispatch);
export default connect(null, mapDispatchToProps)(AuthForm);
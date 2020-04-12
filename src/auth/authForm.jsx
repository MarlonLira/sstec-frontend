import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signin, signup } from './authActions';
import { toastr } from 'react-redux-toastr';

import '../common/style/layout/auth.css'
import labelAndInput from '../common/form/labelAndInputLogin';
import inputMask from '../common/form/inputMask';
import Mensseger from './menssegerRegistrer';


class AuthForm extends Component {

  constructor(props) {
    super(props);
    this.state = { loginMode: 1, check: false };
  }

  changeMode() {
    this.setState({ loginMode: 2 });
  };

  registerMode() {
    this.setState({ loginMode: 3 });
  }

  menssegerMode() {
    this.setState({ loginMode: 4 });
  }

  homeMode() {
    this.setState({ loginMode: 1 });
  }

  replaceCode(code) {
    code = code.replace(/[^\d]+/g, '');
    return code;
  }

  onSubmit(values) {
    let _values;
    const { loginMode } = this.state;
    const { signin, signup } = this.props;

    if(loginMode != 1){
     if (loginMode == 3){
      if (values.name) {
        if (values.email){
          if (values.registryCode){
            if (values.phone){
              if (values.password){
                if (values.confirmPassword){
                  if (values.password == values.confirmPassword){
                    if (values.nameCompany){
                      if(values.registryCodeCompany){
                        if(values.phoneCompany){
                          _values = {
                            "employee": {
                              name: values.name,
                              email: values.email,
                              registryCode: this.replaceCode(values.registryCode),
                              phone: this.replaceCode(values.phone),
                              password: values.password,
                              confirmPassword: values.confirmPassword
                            },
                            "company": {
                              name: values.nameCompany,
                              registryCode: this.replaceCode(values.registryCodeCompany),
                              phone: this.replaceCode(values.phoneCompany)
                            }
                          }
                          signup(_values).then(resp => {
                            if (resp[0].payload.companyId && resp[0].payload.employeeId && resp[0].type == "USER_SIGNUP"){
                              this.menssegerMode();
                            }
                          }); 
                        }else{
                          toastr.error('Erro', 'O Telefone deve está preenchido.');
                        }
                      }else{
                        toastr.error('Erro', 'O CNPJ deve está preenchido.');
                      }
                    }else{
                      toastr.error('Erro', 'A Razão Social deve está preenchida.');
                    }
                  }else{
                    toastr.error('Erro', 'As senhas não coincidem.');
                    this.changeMode();
                  }
                }else{
                  toastr.error('Erro', 'A confirmação de senha deve está preenchida.');
                  this.changeMode();
                }
              }else{
                toastr.error('Erro', 'A Senha deve está preenchida.');
                this.changeMode();
              }
            }else{
              toastr.error('Erro', 'O Telefone deve está preenchido.');
              this.changeMode();
            }
          }else{
            toastr.error('Erro', 'O CPF deve está preenchido.');
            this.changeMode();
          }
        }else{
          toastr.error('Erro', 'O E-mail deve está preenchido.');
          this.changeMode();
        }
      }else{
        toastr.error('Erro', 'O nome completo deve está preenchido.');
        this.changeMode();
      }
     }
    }else{
      _values = {
        "employee": values
      }
      signin(_values);
    }
    //this.state.loginMode == 1 ? signin(_values) : validation = signup(_values, locale);
  };

  render() {
    const { loginMode } = this.state;
    const { handleSubmit } = this.props;

    return (
      <div>
        {loginMode != 4 ?
          <form role='form' onSubmit={handleSubmit(v => this.onSubmit(v))} >
            {loginMode == 1 ?
              <div>
                <p className="login-paragraph">Login:</p>
              </div>
              : null
            }
            {loginMode == 2 ?
              <div>
                <p className="login-paragraph">Crie sua conta</p>
              </div>
              : null
            }
            {loginMode == 3 ?
              <div>
                <p className="login-paragraph">Dados da sua Empresa</p>
              </div>
              : null
            }
            <div className='row'>
              {loginMode == 2 ?
                <Field
                  name='name'
                  component={labelAndInput}
                  cols='12 12'
                  maxLength='30'
                  placeholder='Nome completo'
                  type='input'
                />
                : null
              }
              {loginMode == 2 ?
                <Field
                  name='registryCode'
                  component={inputMask}
                  cols='12 12'
                  placeholder='CPF'
                  type='input'
                  mask={[/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/,]}
                />
                : null
              }
              {loginMode != 3 ?
                <Field
                  name='email'
                  component={labelAndInput}
                  cols='12 12'
                  maxLength='30'
                  placeholder='E-mail'
                  type='email'
                />
                : null
              }
              {loginMode == 2 ?
                <Field
                  name='phone'
                  component={inputMask}
                  cols='12 12'
                  maxLength='30'
                  placeholder='Telefone'
                  type='tel'
                  mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                />
                : null
              }
              {loginMode != 3 ?
                <Field
                  name='password'
                  component={labelAndInput}
                  cols='12 12'
                  placeholder='Senha'
                  type='password'
                />
                : null
              }
              {loginMode == 2 ?
                <Field
                  name='confirmPassword'
                  component={labelAndInput}
                  cols='12 12'
                  placeholder='Confirme sua senha'
                  type='password'
                />
                : null
              }

              {loginMode == 3 ?
                <Field
                  name='nameCompany'
                  component={labelAndInput}
                  
                  cols='12 12'
                  maxLength='30'
                  placeholder='Razão social'
                  type='input'
                />
                : null
              }
              {loginMode == 3 ?
                <Field
                  name='registryCodeCompany'
                  component={inputMask}
                  cols='12 12'
                  maxLength=''
                  placeholder='CNPJ'
                  type='input'
                  mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
                />
                : null
              }
              {loginMode == 3 ?
                <Field
                  name='phoneCompany'
                  component={inputMask}
                  cols='12 12'
                  maxLength='30'
                  placeholder='Telefone'
                  type='tel'
                  mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                />
                : null
              }
            </div>
            {loginMode == 1 ?
              <div className='row'>
                <div className="col-7 remember">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">
                      Lembrar Senha
                    </label>
                  </div>
                </div>
                <div className="col-5 forgot-paragraph">
                  <p className="mb-1">
                    <a href="forgot-password.html">Esqueceu sua senha?</a>
                  </p>
                </div>
              </div>
              : null
            }
            {loginMode == 3 ?
              <div className='row'>
                <div className="col-12 remember">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="contract">
                      Eu li e aceito os termos do contrato
                    </label>
                  </div>
                </div>
              </div>
              : null
            }
            {loginMode == 1 ?
                <button type='submit' className='btn button-login'>
                  Entrar
                </button>
              : null
            }
            {loginMode == 3 ?
                <button type='submit' className='btn button-login'>
                  Registrar
                </button>
              : null
            }
            {loginMode == 2 ?
              <a href='#' className="btn button-login" onClick={() => this.registerMode()}>
                Continuar
              </a>
              : null
            }
            <div>
              <p className="login-paragraph">{loginMode == 1 ? 'Sua empresa ainda não está cadastrada?' : ''} </p>
            </div>
            {loginMode == 1 ?
              <a href='#' className="btn button-login" onClick={() => this.changeMode()}>
                Cadastrar
              </a>
              : null
            }
            {loginMode == 2 ?
              <a href='#' className="btn button-login" onClick={() => this.homeMode()}>
                Voltar
              </a>
              : null
            }
            {loginMode == 3 ?
              <a href='#' className="btn button-login" onClick={() => this.changeMode()}>
                Voltar
              </a>
              : null
            }
          </form>
          : null}

        {loginMode == 4 ? <Mensseger /> : null}
        
        {loginMode == 4 ?
          <a href='#' className="btn button-login" onClick={() => window.location.reload(true)}>
            Voltar
          </a>
          : null
        }
      </div>
    )
  }
}

AuthForm = reduxForm({ form: 'authForm' })(AuthForm);
const mapDispatchToProps = dispatch => bindActionCreators({ signin, signup }, dispatch);
export default connect(null, mapDispatchToProps)(AuthForm);
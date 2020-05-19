import React, { Component } from 'react';
import { reduxForm, Field, Fields } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signin, signup, validateToken } from './authActions';
import { toastr } from 'react-redux-toastr';

import labelAndInput from '../common/form/labelAndInputLogin';
import inputMask from '../common/form/inputMask';
import Mensseger from './menssegerRegistrer';
import logo from '../common/images/logo2.png';
import { replaceCode } from '../../src/common/functions/replace';

class AuthForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginMode: 1,
      checkContract: false
    };

    this.checkContractChange = this.checkContractChange.bind(this);
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

  checkContractChange(event) {
    const check = event.target.checked;
    const value = event.target.name;

    this.setState({ [value]: check });
  }

  onSubmit(values) {
    let _values;
    let cpfEmployee;
    let cnpjCompany;
    let phoneEmployee;
    let phoneCompany;
    let password;
    let valueArray;
    const { loginMode, checkContract } = this.state;
    const { signin, signup } = this.props;

    if (loginMode != 1) {
      if (loginMode == 3) {
        if (values.name) {
          if (values.registryCode) {
            if (values.email) {
              if (values.phone) {
                if (values.password) {
                  if (values.confirmPassword) {
                    if (values.password == values.confirmPassword) {
                      if (values.nameCompany) {
                        if (values.registryCodeCompany) {
                          if (values.phoneCompany) {
                            // employee 
                            values.registryCode = replaceCode(values.registryCode);
                            values.phone = replaceCode(values.phone);
                            cpfEmployee = values.registryCode;
                            phoneEmployee = values.phone;
                            password = values.password;

                            // company
                            values.registryCodeCompany = replaceCode(values.registryCodeCompany);
                            values.phoneCompany = replaceCode(values.phoneCompany);
                            cnpjCompany = values.registryCodeCompany;
                            phoneCompany = values.phoneCompany;

                            if (checkContract) {
                              if (cpfEmployee.length < 11) {
                                toastr.error('Erro', 'O CPF deve conter 11 digitos.');
                                this.changeMode();
                              } else if (phoneEmployee.length < 11) {
                                toastr.error('Erro', 'O Telefone deve conter 11 digitos: (xx) x xxxx-xxxx.');
                                this.changeMode();
                              } else if (cnpjCompany.length < 14) {
                                toastr.error('Erro', 'O CNPJ deve conter 14 digitos.');
                              } else if (phoneCompany.length < 11) {
                                toastr.error('Erro', 'O Telefone deve conter 11 digitos: (xx) x xxxx-xxxx.');
                              } else if (password.length < 6) {
                                toastr.error('Erro', 'A senha deve conter, no mínimo, 6 dígitos.');
                                this.changeMode();
                              } else {
                                _values = {
                                  "employee": {
                                    name: values.name,
                                    email: values.email,
                                    registryCode: values.registryCode,
                                    phone: values.phone,
                                    password: values.password,
                                    confirmPassword: values.confirmPassword
                                  },
                                  "company": {
                                    name: values.nameCompany,
                                    registryCode: values.registryCodeCompany,
                                    phone: values.phoneCompany
                                  }
                                }
                                
                                signup(_values)
                                  .then(resp => {
                                    console.log(resp)
                                    if (resp[0].payload.employeeId && resp[0].type == "USER_SIGNUP") {
                                      this.menssegerMode();
                                    }
                                  });
                              }
                            } else {
                              toastr.message('', 'Aceite os termos de contrato, para finalização do cadastro.');
                            }
                          } else {
                            toastr.error('Erro', 'O Telefone deve está preenchido.');
                          }
                        } else {
                          toastr.error('Erro', 'O CNPJ deve está preenchido.');
                        }
                      } else {
                        toastr.error('Erro', 'A Razão Social deve está preenchida.');
                      }
                    } else {
                      toastr.error('Erro', 'As senhas não coincidem.');
                      this.changeMode();
                    }
                  } else {
                    toastr.error('Erro', 'A confirmação de senha deve está preenchida.');
                    this.changeMode();
                  }
                } else {
                  toastr.error('Erro', 'A Senha deve está preenchida.');
                  this.changeMode();
                }
              } else {
                toastr.error('Erro', 'O Telefone deve está preenchido.');
                this.changeMode();
              }
            } else {
              toastr.error('Erro', 'O E-mail deve está preenchido.');
              this.changeMode();
            }
          } else {
            toastr.error('Erro', 'O CPF deve está preenchido.');
            this.changeMode();
          }
        } else {
          toastr.error('Erro', 'O nome completo deve está preenchido.');
          this.changeMode();
        }
      }
    } else {
      if (values.email) {
        if (values.password) {
          _values = {
            "employee": values
          }
          signin(_values);
        } else {
          toastr.error('Erro', 'Informe a Senha  para efetuar o login.');
        }
      } else {
        toastr.error('Erro', 'Informe o E-mail para efetuar o login.');
      }
    }
    //this.state.loginMode == 1 ? signin(_values) : validation = signup(_values, locale);
  };

  render() {
    const { loginMode, checkContract } = this.state;
    const { handleSubmit } = this.props;

    return (
        <form role='form' className='login-form' onSubmit={handleSubmit(v => this.onSubmit(v))} >
          <div className="logo-image">
            <img src={logo} width="100" height="100" />
          </div>
          <div className="login-title">
            <h2>Simple Parking</h2>
            {loginMode == 1 ?
              <p className="login-paragraph">Login:</p>
              : null
            }
            {loginMode == 3 ?
              <p className="login-paragraph">Dados da sua Empresa:</p>
              : null
            }
          </div>

          {loginMode != 4 ?
            <div className='row'>
              {loginMode == 2 ?
                <Field
                  name='name'
                  component={labelAndInput}
                  cols='12 12'
                  maxLength='30'
                  placeholder='Nome completo *'
                  type='input'
                />
                : null
              }
              {loginMode == 2 ?
                <Field
                  name='registryCode'
                  component={inputMask}
                  cols='12 12'
                  placeholder='CPF *'
                  type='input'
                  mask={'CPF'}
                />
                : null
              }
              {loginMode != 3 ?
                <Field
                  name='email'
                  component={labelAndInput}
                  cols='12 12'
                  maxLength='30'
                  placeholder='E-mail *'
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
                  placeholder='Telefone *'
                  type='tel'
                  mask={'PHONE'}
                />
                : null
              }
              {loginMode != 3 ?
                <Field
                  name='password'
                  component={labelAndInput}
                  cols='12 12'
                  placeholder='Senha *'
                  type='password'
                />
                : null
              }
              {loginMode == 2 ?
                <Field
                  name='confirmPassword'
                  component={labelAndInput}
                  cols='12 12'
                  placeholder='Confirme sua senha *'
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
                  placeholder='Razão social *'
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
                  placeholder='CNPJ *'
                  type='input'
                  mask={'CNPJ'}
                />
                : null
              }
              {loginMode == 3 ?
                <Field
                  name='phoneCompany'
                  component={inputMask}
                  cols='12 12'
                  maxLength='30'
                  placeholder='Telefone *'
                  type='tel'
                  mask={'PHONE'}
                />
                : null
              }
            </div>
            : null
          }
          {loginMode == 1 ?
            <div className='row'>
              <div className="col-6 remember">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">
                    Lembrar Senha
                    </label>
                </div>
              </div>
              <div className="col-6 forgot-paragraph">
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
                  <input type="checkbox" name="checkContract" checked={checkContract} id="remember" onChange={this.checkContractChange} />
                  <label htmlFor="contract">
                    Eu li e aceito os termos do contrato *
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

          <p className="login-paragraph">{loginMode == 1 ? 'Sua empresa ainda não está cadastrada?' : ''} </p>

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

          {loginMode == 4 ? <Mensseger /> : null}

          {loginMode == 4 ?
            <a href='#' className="btn button-login" onClick={() => window.location.reload(true)}>
              Voltar
          </a>
            : null
          }
        </form>
    )
  }
}

AuthForm = reduxForm({ form: 'authForm' })(AuthForm);
const mapDispatchToProps = dispatch => bindActionCreators({ signin, signup }, dispatch);
export default connect(null, mapDispatchToProps)(AuthForm);
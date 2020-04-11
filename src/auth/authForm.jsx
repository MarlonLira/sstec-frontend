import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signin, signup } from './authActions';
import '../common/style/layout/auth.css'

import labelAndInput from '../common/form/labelAndInputLogin';
import inputMask from '../common/form/inputMask';


class AuthForm extends Component {

  constructor(props) {
    super(props);
    this.state = { loginMode: 1 };
  }

  changeMode() {
    this.setState({ loginMode: 2 });
  };

  registerMode() {
    this.setState({ loginMode: 3 });
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

    if (loginMode != 1) {
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
    } else {
      _values = {
        "employee": values
      }
    };

    const { signin, signup } = this.props;
    this.state.loginMode == 1 ? signin(_values) : signup(_values);

    console.log(_values);
  };

  render() {
    const { loginMode } = this.state;
    const { handleSubmit } = this.props;

    return (
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
              required='true'
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
              required='true'
              cols='12 12'
              //maxLength=''
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
              required='true'
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
              required='true'
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
              required='true'
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
              required='true'
              placeholder='Confirme sua senha'
              type='password'
            />
            : null
          }

          {loginMode == 3 ?
            <Field
              name='nameCompany'
              component={labelAndInput}
              required='true'
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
              required='true'
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
              required='true'
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

        {loginMode != 1 ?
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
          <div className="row" id="btn">
            <button type='submit' className='btn button-login'>
              Entrar
              </button>
          </div>
          : null
        }

        {loginMode == 3 ?
          <div className="row" id="btn">
            <button type='submit' className='btn button-login'>
              Registrar
              </button>
          </div>
          : null
        }

        {loginMode == 2 ?
          <div className="row" id="btn">
            <a href='#' className="btn button-login" onClick={() => this.registerMode()}>
              Continuar
            </a>
          </div>
          : null
        }

        <div>
          <p className="login-paragraph">{loginMode == 1 ? 'Sua empresa ainda não está cadastrada?' : ''} </p>
        </div>

        {loginMode == 1 ?
          <div className="row" id="btn">
            <a href='#' className="btn button-login" onClick={() => this.changeMode()}>
              Cadastrar
            </a>
          </div>
          : null
        }

        {loginMode == 2 ?
          <div className="row" id="btn">
            <a href='#' className="btn button-login" onClick={() => this.homeMode()}>
              Voltar
            </a>
          </div>
          : null
        }

        {loginMode == 3 ?
          <div className="row" id="btn">
            <a href='#' className="btn button-login" onClick={() => this.changeMode()}>
              Voltar
            </a>
          </div>
          : null
        }

      </form>
    )
  }
}

AuthForm = reduxForm({ form: 'authForm' })(AuthForm);
const mapDispatchToProps = dispatch => bindActionCreators({ signin, signup }, dispatch);
export default connect(null, mapDispatchToProps)(AuthForm);
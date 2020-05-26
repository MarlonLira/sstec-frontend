import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signup } from './authActions';
import { Mask, Pattern, CleanMask } from '../common/functions/util';
import TextInput from '../common/widget/roundedTextInput';
import Messages from '../common/msg/messages';
import { Redirect, IsNeedRedirect } from '../common/functions/page';
import AuthHeader from './authHeader';

class SignUp extends Component {

  componentWillMount() {
    IsNeedRedirect();
  }

  onSubmit(values) {
    let _values = {
      "employee": {
        name: values.name,
        email: values.email,
        registryCode: CleanMask(values.registryCode, Mask.USER_REGISTRY_CODE),
        phone: CleanMask(values.phone, Mask.PHONE),
        password: values.password,
        confirmPassword: values.confirmPassword
      },
      "company": {
        name: values.companyName,
        registryCode: CleanMask(values.companyRegistryCode, Mask.COMPANY_REGISTRY_CODE),
        phone: CleanMask(values.companyPhone, Mask.PHONE)
      }
    }

    this.props.signup(_values)
      .then(resp => {
        console.log(resp)
        if (resp[0].type == 'USER_SIGNUP') {
          //Redirect('');
        }
      });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <AuthHeader >
        <form role='form' className='display-c' onSubmit={handleSubmit(v => this.onSubmit(v))}>
          {/* <!--================================= Employee =================================================--> */}
          <div className='width-45'>
            <span className="login100-form-title">
              Employee
					 </span>

            <Field
              name='name'
              component={TextInput}
              cols='16 16'
              maxLenth='30'
              placeholder='Full Name'
              type='text'
              icon='user'
              pattern={Pattern.TEXT}
              patternError={'O nome digitado é invalido!'}
              required={true}
            />

            <Field
              name='registryCode'
              component={TextInput}
              cols='16 16'
              maxLenth='30'
              placeholder='Registry Code'
              type='text'
              icon='id-card'
              mask={Mask.USER_REGISTRY_CODE}
              pattern={Pattern.USER_REGISTRY_CODE}
              patternError={'O CPF digitado é invalido!'}
              required={true}
            />

            <Field
              name='email'
              component={TextInput}
              cols='16 16'
              maxLenth='30'
              placeholder='E-mail'
              type='email'
              icon='envelope'
              pattern={Pattern.EMAIL}
              required={true}
            />

            <Field
              name='phone'
              component={TextInput}
              cols='16 16'
              maxLenth='30'
              placeholder='Phone'
              type='phone'
              icon='phone'
              mask={Mask.PHONE}
              pattern={Pattern.PHONE}
              patternError={'O Telefone digitado é invalido!'}
              required={true}
            />

            <Field
              name='password'
              component={TextInput}
              cols='16 16'
              maxLenth='30'
              placeholder='Password'
              type='password'
              icon='lock'
              pattern={Pattern.PASSWORD}
              patternError={'A Senha digitada é invalida!'}
              required={true}
            />

            <Field
              name='new-password'
              component={TextInput}
              cols='16 16'
              maxLenth='30'
              placeholder='Password'
              type='password'
              icon='lock'
              pattern={Pattern.PASSWORD}
              patternError={'A Senha digitada é invalida!'}
              required={true}
            />
          </div>

          {/* <!--================================= Company =================================================--> */}

          <div className='width-45'>
            <span className="login100-form-title">
              Company
      		  </span>
            <Field
              name='companyName'
              component={TextInput}
              cols='16 16'
              maxLenth='30'
              placeholder='Company Name'
              type='text'
              icon='building'
              pattern={Pattern.TEXT}
              patternError={'O nome da empresa digitada é invalida!'}
              required={true}
            />

            <Field
              name='companyRegistryCode'
              component={TextInput}
              cols='16 16'
              maxLenth='30'
              placeholder='Company Registry Code'
              type='text'
              icon='id-card'
              mask={Mask.COMPANY_REGISTRY_CODE}
              pattern={Pattern.COMPANY_REGISTRY_CODE}
              patternError={'O CNPJ da empresa digitado é invalido!'}
              required={true}
            />

            <Field
              name='companyPhone'
              component={TextInput}
              cols='16 16'
              maxLenth='30'
              placeholder='Company Phone'
              type='text'
              icon='phone'
              mask={Mask.PHONE}
              pattern={Pattern.PHONE}
              patternError={'O Telefone da empresa digitado é invalido!'}
              required={true}
            />
          </div>
          <div className="container-login100-form-btn">
            <button className="login100-form-btn">
              Cadastrar
       		</button>
          </div>

          <div className="text-center p-t-136">
            <a className="txt2" href="#signin">
              <i className="fa fa-long-arrow-left m-l-5" aria-hidden="true"></i>
              {' '}Voltar
      		</a>
          </div>
        </form>
        <Messages />
      </AuthHeader>
    );
  }
}

SignUp = reduxForm({ form: 'authForm' })(SignUp);
const mapDispatchToProps = dispatch => bindActionCreators({ signup }, dispatch);
export default connect(null, mapDispatchToProps)(SignUp);
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SubmissionError } from 'redux-form'

import { signup } from './authActions';
import { Mask, Pattern, CleanMask } from '../common/functions/util';
import TextInput from '../common/widget/customTextInput';
import Messages from '../common/msg/messages';
import { Redirect, IsNeedRedirect } from '../common/functions/page';
import AuthHeader from './authHeader';

const required = value => value ? undefined : new SubmissionError({ name: 'User does not exist', _error: 'Login failed!' });
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);

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
              pattern={Pattern.USER_REGISTRY_CODE.toString().replace('/', '').replace('/', '')}
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
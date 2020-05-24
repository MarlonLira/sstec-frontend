import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup } from './authActions';

import { Mask } from '../common/functions/mask';
import TextInput from '../common/widget/customTextInput';
import { Redirect } from '../common/functions/page';

import AuthHeader from './authHeader';
import ImgTitle from './signinImgTitle';

class SignUp extends Component {

  onSubmit(values) {
    let _values = {
      "employee": values
    }
    this.props.signup(_values)
      .then(resp => {
        if (resp[0].type == 'USER_SIGNUP') {
          Redirect('');
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
            />

            <Field
              name='registryCode'
              component={TextInput}
              cols='16 16'
              maxLenth='30'
              placeholder='Registry Code'
              type='text'
              icon='id-card'
            />

            <Field
              name='email'
              component={TextInput}
              cols='16 16'
              maxLenth='30'
              placeholder='E-mail'
              type='email'
              icon='envelope'
            />

            <Field
              name='phone'
              component={TextInput}
              cols='16 16'
              maxLenth='30'
              placeholder='Phone'
              type='email'
              icon='phone'
            />

            <Field
              name='password'
              component={TextInput}
              cols='16 16'
              maxLenth='30'
              placeholder='Password'
              type='password'
              icon='lock'
            />

            <Field
              name='new-password'
              component={TextInput}
              cols='16 16'
              maxLenth='30'
              placeholder='Password'
              type='password'
              icon='lock'
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
            />

            <Field
              name='companyRegistryCode'
              component={TextInput}
              cols='16 16'
              maxLenth='30'
              placeholder='Company Registry Code'
              type='text'
              icon='id-card'
            />

            <Field
              name='companyPhone'
              component={TextInput}
              cols='16 16'
              maxLenth='30'
              placeholder='Company Phone'
              type='text'
              icon='phone'
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
      </AuthHeader>
    );
  }
}

SignUp = reduxForm({ form: 'authForm' })(SignUp);
const mapDispatchToProps = dispatch => bindActionCreators({ signup }, dispatch);
export default connect(null, mapDispatchToProps)(SignUp);
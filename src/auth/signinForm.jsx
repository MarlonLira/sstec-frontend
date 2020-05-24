import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signin } from './authActions';

import { Mask } from '../common/functions/mask';
import TextInput from '../common/widget/customTextInput';
import { Redirect } from '../common/functions/page';

import AuthHeader from './authHeader';
import ImgTitle from './signinImgTitle';

class SignInForm extends Component {

  onSubmit(values) {
    let _values = {
      "employee": values
    }
    this.props.signin(_values)
      .then(resp => {
        if (resp[0].type == 'USER_FETCHED') {
          Redirect('');
        }
      });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <AuthHeader >
        <ImgTitle />
        <form role='form' className="login100-form validate-form" onSubmit={handleSubmit(v => this.onSubmit(v))}>
          <span className="login100-form-title">
            Login
				      </span>

          <Field
            name='email'
            component={TextInput}
            cols='14 14'
            maxLenth='30'
            placeholder='E-mail'
            type='email'
            icon='envelope'
          />

          <Field
            name='password'
            component={TextInput}
            cols='14 14'
            maxLenth='30'
            placeholder='Password'
            type='password'
            icon='lock'
          />

          <div className="container-login100-form-btn">
            <button className="login100-form-btn">
              Entrar
                </button>
          </div>

          <div className="text-center p-t-12">
            <span className="txt1">
              Esqueceu seu {' '}
            </span>
            <a className="txt2" href="#retrieveAccount">
              Usuario / Senha?
               </a>
          </div>

          <div className="text-center p-t-136">
            <a className="txt2" href="#signup">
              Crie sua conta{' '}
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
            </a>
          </div>
        </form>
      </AuthHeader>
    )
  }
}

SignInForm = reduxForm({ form: 'authForm' })(SignInForm);
const mapDispatchToProps = dispatch => bindActionCreators({ signin }, dispatch);
export default connect(null, mapDispatchToProps)(SignInForm);
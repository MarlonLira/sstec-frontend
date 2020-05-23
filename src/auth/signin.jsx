import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import logo from '../common/styles/images/img-4.png';

class SignIn extends Component {
  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <div className="title-custom">
                <h3>
                  Simple Parking
						      </h3>
                <h6> seu carro seguro !</h6>
              </div>
              <img src={logo} alt="IMG" />
            </div>
            <form className="login100-form validate-form">
              <span className="login100-form-title">
                Login
					    </span>

              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="email" placeholder="Email" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="pass" placeholder="Password" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>

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
                  Crie sua conta
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

//const mapDispatchToProps = dispatch => bindActionCreators({ login, signup }, dispatch);
export default connect(null, null)(SignIn);
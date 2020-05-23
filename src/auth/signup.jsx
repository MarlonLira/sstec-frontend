import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SignUp extends Component {
  render() {
    return (

      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            {/* <!--================================= Employee =================================================--> */}
            <div>
              <span className="login100-form-title">
                Employee
					</span>
              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="name" placeholder="Full Name" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="registryCode" placeholder="Registry Code" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-id-card" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="email" placeholder="Email" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="phone" placeholder="Phone" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="pass" placeholder="Password" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="confirmPass" placeholder="Confirm Password" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
            </div>

            {/* <!--================================= Company =================================================--> */}
            <div>
              <span className="login100-form-title">
                Company
					</span>
              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="CompanyName" placeholder="Company Name" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-building" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="registryCode" placeholder="Registry Code" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-id-card" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="phone" placeholder="Phone" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
              </div>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn">
                Cadastrar
					</button>
            </div>

            <div className="text-center p-t-136">
              <a className="txt2" href="#signin">
                <i className="fa fa-long-arrow-left m-l-5" aria-hidden="true"></i>
						Voltar
					</a>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

//const mapDispatchToProps = dispatch => bindActionCreators({ login, signup }, dispatch);
export default connect(null, null)(SignUp);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, IsNeedRedirect } from '../common/functions/page';

class RetrieveAccount extends Component {
  componentWillMount() {
    IsNeedRedirect();
  }

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            {/* <!--================================= Employee =================================================--> */}

            <div className="title-recovery">
              <h3>
                Recuperar Conta
					</h3>
              <h6> Por favor informe os dados abaixo!</h6>
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

            <div className="container-login100-form-btn">
              <button className="login100-form-btn">
                Enviar
					</button>
            </div>

            <div className="text-center p-t-136">
              <a className="txt2" href="#signin">
                <i className="fa fa-long-arrow-left m-l-5" aria-hidden="true"></i>
                {' '}Voltar
					</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//const mapDispatchToProps = dispatch => bindActionCreators({ login, signup }, dispatch);
export default connect(null, null)(RetrieveAccount);
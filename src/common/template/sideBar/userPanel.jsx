import DefaultLogo from '../../images/default-150x150.png';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../../auth/authActions';

class UserPanel extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { name, email } = this.props.user;
        return (
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    {/* <i className='fa fa-user img-circle elevation-4' ></i> */}
                    <img src={DefaultLogo} className="img-circle elevation-2"></img>
                </div>
                <div className="info user-text">
                    <a href="#" className="d-block" >{name}</a>
                </div>
                <div>
                    <a className="fas fa-sign-out-alt logout-icon" id="logoutIcon" href="#" onClick={this.props.logout} ></a>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.auth.user });
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(UserPanel);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getList, showUpdate, showDelete, showCreate } from './companyActions';
import DefaultLogo from '../common/styles/images/ProfilePhoto.jpg';
import { CreateMaskText, MaskPhoneText, Mask } from '../common/functions/mask';
import './style.css';

class ProfileCompany extends Component {

  componentWillMount() {
    this.props.getList();
    this.props.showCreate();
  }

  renderCompany() {
    const list = this.props.list || [];
    return list.map(company => (
      <div className="profile-card" key={company.id}>
        <div className="top-section">
          <i className="notif fa fa-pen" onClick={() => this.props.showUpdate(company)}></i>
          <i className="message fas fa-envelope"></i>
          <div className="pic">
            <img src={DefaultLogo} alt=""></img>
          </div>
          <div className="name">{company.name}</div>
          <div className="tag">{CreateMaskText(company.registryCode, Mask.COMPANY_REGISTRY_CODE)}</div>
          <div className="tag">{MaskPhoneText(company.phone, Mask.PHONE)}</div>

        </div>

        <div className="bottom-section">
          <div className="social-media">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fas fa-link"></i></a>
          </div>

          <div>190 <span>Estacionamentos</span></div>
          <div className="border"></div>
          <div>204K <span>Clientes</span></div>
          <div className="border"></div>
          <div>7.3M <span>Visitas</span></div>
        </div>
      </div>
    ))
  }
  render() {
    return (
      <div className="containerCompany">
        {this.renderCompany()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ list: state.company.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showDelete, showUpdate, showCreate }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProfileCompany);
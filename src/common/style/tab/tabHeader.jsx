import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectTab } from './tabActions';
import If from '../operator/if';

class TabHeader extends Component {
  render() {
    const selected = this.props.tab.selected === this.props.target;
    const visible = this.props.tab.visible[this.props.target];
    return (
      <If test={visible}>
        <li className={selected ? 'active' : ''}>
          <a href='javascript:;'
            data-toggle='tab'
            onClick={() => this.props.selectTab(this.props.target)}
            data-target={this.props.target}>
            <i className={`fa fa-${this.props.icon}`}></i>{' ' + this.props.label}
          </a>
        </li>
      </If>
    )
  }
}

const mapStateToProps = state => ({ tab: state.tab });
//espalhar pros reducers para mapear uma ação de um evento
//dispatch -> chamar uma função do tipo actioncreator 
//que o resultado dessa função é um action que é passada 
//para um redux para que ele possa evoluir o estado da aplicação 
const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch);
//conecta com o estado do redux
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);
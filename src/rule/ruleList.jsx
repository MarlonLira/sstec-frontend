import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList, showUpdate, showDelete, showCreate } from './ruleActions';

class RuleList extends Component {

  componentWillMount() {
    this.props.getList();
    this.props.showCreate();
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map(rule => (
      <tr key={rule.id}>
        <td>{rule.name}</td>
        <td>{rule.status}</td>
        <td>{rule.level}</td>
        <td className='table-actions'>
          <button type="button" className='btn btn-warning' onClick={() => this.props.showUpdate(rule)}>
            <i className='fa fa-paint-brush'></i>
          </button>
          <button type="button" className='btn btn-danger' onClick={() => this.props.showDelete(rule)}>
            <i className='fa fa-trash'></i>
          </button>
        </td>
      </tr>
    ))
  }
  render() {
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Permissão</th>
              <th>Status</th>
              <th>Nível</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({ list: state.rule.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showDelete, showUpdate, showCreate }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(RuleList);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList, showUpdate, showDelete, showCreate } from './productActions';

class ProductList extends Component {

  componentWillMount() {
    this.props.getList();
    this.props.showCreate();
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map(pd => (
      <tr key={pd.id}>
        <td>{pd.name}</td>
        <td>{pd.amount}</td>
        <td>{pd.date}</td>
        <td>{pd.validity}</td>
        <td>{pd.obs}</td>
        <td className='table-actions'>
          <button className='btn btn-warning' onClick={() => this.props.showUpdate(pd)}>
            <i className='fa fa-pencil'></i>
          </button>
          <button className='btn btn-danger' onClick={() => this.props.showDelete(pd)}>
            <i className='fa fa-trash-o'></i>
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
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Data</th>
              <th>Validade</th>
              <th>Obs.</th>
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

const mapStateToProps = state => ({ list: state.product.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showDelete, showUpdate, showCreate }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
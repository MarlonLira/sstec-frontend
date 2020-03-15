import React, { Component } from 'react';
import Grid from '../common/layout/grid';
import { Field } from 'redux-form';
import Input from '../common/form/input';

class CreditList extends Component {
  renderRows() {
    return (
      <tr>
        <td><Field name='innerDate.Month' component={Input}
          placeholder='informe o nome'
          readOnly={this.props.readOnly} /></td>
        <td><Field name='innerDate.Year' component={Input}
          placeholder='informe o valor'
          readOnly={this.props.readOnly} /></td>
        <td></td>
      </tr>
    );
  }
  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Créditos</legend>
          <table className='table'>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}

export default CreditList;
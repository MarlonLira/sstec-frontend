import React, { Component } from 'react';

import ContentHeader from '../common/style/layout/contentHeader';
import Content from '../common/style/layout/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/style/layout/row';
import { ReturnIfValid } from '../common/function/properties';

class Dashboard extends Component {
  render() {
    const{credit, debit} = {credit: 0, debit: 0};
    const consolidated = (ReturnIfValid(credit, 0) - ReturnIfValid(debit, 0));
    return (
      <div>
        <ContentHeader title='Dashboard' small='Versão 1.0' />
        <Content>
          <Row>
            <ValueBox
              cols='6 4'
              color='red'
              icon='bank'
              value={`R$ ${credit}`}
              text='Ganho Mensal'
            />
            <ValueBox
              cols='6 4'
              color='green'
              icon='credit-card'
              value={`R$ ${debit}`}
              text='Investimento Mensal'
            />
            <ValueBox
              cols='6 4'
              color='blue'
              icon='money'
              value={`R$ ${consolidated}`}
              text='Valor Consolidado' />
          </Row>
        </Content>
      </div>
    );
  }
}

export default Dashboard;
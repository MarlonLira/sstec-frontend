import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Content from '../common/template/content';
import ContentHeader from '../common/template/contentHeader';
import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabsHeader';
import TabsContent from '../common/tab/tabsContent';
import TabHeader from '../common/tab/tabHeader';
import TabContent from '../common/tab/tabContent';
import { selectTab, showTabs } from '../common/tab/tabActions';
import { create, update, init, destroy } from './billingCycleActions';

import List from './billingCycleList';
import Form from '../billingCycle/billingCycleForm';

class BillingCycle extends Component {
  componentWillMount() {
    this.props.init();
  }
  render() {
    return (
      <div>
        <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tabList' />
              <TabHeader label='Incluir' icon='plus' target='tabCreate' />
              <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
              <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <List />
              </TabContent>
              <TabContent id='tabCreate'>
                <Form onSubmit={this.props.create}
                  submitLabel='Incluir' submitClass='primary' />
              </TabContent>
              <TabContent id='tabUpdate'>
                <Form onSubmit={this.props.update}
                  submitLabel='Alterar' submitClass='warning' />
              </TabContent>
              <TabContent id='tabDelete'>
                <Form onSubmit={this.props.destroy} readOnly='true'
                  submitLabel='Excluir' submitClass='danger' />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, create, init, update, destroy }, dispatch);
export default connect(null, mapDispatchToProps)(BillingCycle);
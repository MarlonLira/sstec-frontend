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
import { create, update, destroy, init } from './ruleActions';

import List from './ruleList';
import Form from './ruleForm';

class Rule extends Component {
  componentWillMount() {
    this.props.selectTab('tabList');
    this.props.showTabs('tabList', 'tabCreate');
  }
  render() {
    return (
      <div>
        <ContentHeader title='Permissões' small='Cadastro' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tabList' />
              <TabHeader label='Incluir' icon='plus' target='tabCreate' onClick={() => init()} />
              <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
              <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <List />
              </TabContent>
              <TabContent id='tabCreate'>
                <Form onSubmit={this.props.create}
                  submitLabel='Incluir' submitClass='primary p-custom' />
              </TabContent>
              <TabContent id='tabUpdate'>
                <Form onSubmit={this.props.update}
                  submitLabel='Atualizar' submitClass='warning' />
              </TabContent>
              <TabContent id='tabDelete'>
                <Form onSubmit={this.props.destroy}
                  submitLabel='Excluir' submitClass='danger' readOnly='true' />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, create, update, destroy }, dispatch);
export default connect(null, mapDispatchToProps)(Rule);
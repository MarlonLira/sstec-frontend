import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentHeader from '../../common/style/layout/contentHeader';
import Content from '../../common/style/layout/content';
import TabHeader from '../../common/style/tab/tabHeader';
import TabsHeader from '../../common/style/tab/tabsHeader';
import TabContent from '../../common/style/tab/tabContent';
import TabsContent from '../../common/style/tab/tabsContent';
import Tabs from '../../common/style/tab/tabs';
import Form from './clientForm';
import List from './clientList';

import { showTabs, selectTab } from '../../action/tabActions';
import { create, init, remove, update } from '../../action/clientActions';

class Client extends Component {
  componentWillMount() {
    this.props.init();
  }
  render() {
    return (
      <div>
        <ContentHeader title='Clientes' small='Cadastro' />
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
                <Form onSubmit={this.props.remove} readOnly='true'
                  submitLabel='Excluir' submitClass='danger' />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, create, init, update, remove }, dispatch);
export default connect(null, mapDispatchToProps)(Client);
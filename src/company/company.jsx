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
import { create, update, destroy, init } from './companyActions';

import Profile from './profileCompany'
import Form from './companyForm';

class Company extends Component {
    componentWillMount() {
        this.props.selectTab('tabProfile');
        this.props.showTabs('tabProfile', 'tabAddress');
    }
    render() {
        return (
            <div>
                <ContentHeader title="Configurações" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Perfil' icon='user' target='tabProfile' />
                            <TabHeader label='Endereço' icon='list' target='tabAddress' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' onClick={() => init()} />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabProfile'>
                                <Profile />
                            </TabContent>
                            <TabContent id='tabAddress'>
                                <h1>Endereço</h1>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <h1>CREATE</h1>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update}
                                    submitLabel='Atualizar' submitClass='warning' />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, update }, dispatch);
export default connect(null, mapDispatchToProps)(Company);
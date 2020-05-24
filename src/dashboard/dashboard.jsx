import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSummary } from '../dashboard/dashboardActions';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import InfoBox from '../common/widget/infoBox';
import Panel from '../common/widget/panel';
import Card from '../common/widget/card';
import SchedulingList from '../scheduling/schedulingList';

import Row from '../common/layout/row';
import { ReturnIfValid } from '../common/functions/properties';
import { IsNeedRefresh } from '../common/functions/page';

class Dashboard extends Component {
  componentWillMount() {
    //IsNeedRefresh(true);
    //this.props.getSummary();
  }

  componentDidMount() {
    //IsNeedRefresh(true);
  }

  render() {
    const { credit, debit, goal } = this.props.summary;
    const consolidated = (ReturnIfValid(credit, 0) - ReturnIfValid(debit, 0));
    const pGoal = ((consolidated < 0 ? 0 : consolidated) * 100) / (goal <= 0 ? 1 : goal);
    return (
      <div>
        <ContentHeader title='Dashboard' small='Versão 1.2' />
        <Content>
          <div className="valuebox-custom">
            <Row>
              <Card title="Reservas Recentes | Check-in" btnName="Ver Tudo" btnEnabled='true'>
                <SchedulingList />
              </Card>
              <Card title="Reservas Expirando | Check-out" btnName="Ver Tudo" btnEnabled='true'>
                <SchedulingList />
              </Card>
            </Row>
          </div>
          <Card title='Dados Financeiros'>
            <div className="valuebox-custom">
              <Panel name='Ganhos'>
                <Row>
                  <ValueBox
                    cols='6 4'
                    color='red2'
                    icon='dollar-sign'
                    value={`R$ ${credit}`}
                    text='Total de Créditos'
                  />
                  <ValueBox
                    cols='6 4'
                    color='purple2'
                    icon='credit-card'
                    value={`R$ ${debit}`}
                    text='Total de Débitos'
                  />
                  <ValueBox
                    cols='6 4'
                    color='info'
                    icon='donate'
                    value={`R$ ${consolidated}`}
                    text='Valor Consolidado'
                  />
                </Row>
              </Panel>
              <Panel name='Metas'>
                <Row>
                  <InfoBox
                    cols='6 4'
                    color='gray'
                    icon='euro-sign'
                    value={`R$ ${goal}`}
                    text='Meta'
                    percentValue={`${pGoal}%`}
                    percentText={`${pGoal}% da meta foi atingida!`}
                  />
                  <InfoBox
                    cols='6 4'
                    color='info'
                    icon='briefcase'
                    value={`R$ ${goal}`}
                    text='Meta'
                    percentValue={`${pGoal}%`}
                    percentText={`${pGoal}% da meta foi atingida!`}
                  />
                  <InfoBox
                    cols='6 4'
                    color='purple2'
                    icon='calendar'
                    value={`R$ ${goal}`}
                    text='Meta'
                    percentValue={`${pGoal}%`}
                    percentText={`${pGoal}% da meta foi atingida!`}
                  />
                </Row>
              </Panel>
            </div>
          </Card>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary });
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary, IsNeedRefresh }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
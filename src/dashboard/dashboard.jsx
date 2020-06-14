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
import Modal from '../common/modal/modal'

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  componentWillMount() {
    //IsNeedRefresh(true);
    //this.props.getSummary();
    this.notification();
  }

  componentDidMount() {
    //IsNeedRefresh(true);
  }

  notification() {
    if (typeof Notification === 'function') {
      if (Notification.permission !== 'granted') {
        this.openModal();
      } else {
        this.closeModal();
      }
    }
  }

  acceptPermission() {
    
    this.closeModal();

    Notification.requestPermission(permission =>{
      if(permission === 'granted'){
        console.log('aceitou');
      }
    })
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  openModal(){
    this.setState({ modalIsOpen: true });
  }

  renderMordal() {
    return (
      <Modal
        open={this.state.modalIsOpen}
        modalTitle={'Permissões'}
        description={'O Simple Parking precisa de permissão para notificar as novas reservas!'}
        span={'Deseja ativar as notificações?'}
        form={
          <div className="row">
            <div className='box-footer'>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => this.acceptPermission()}>
                Ativar
              </button>
              <button
                type="button" 
                className='btn btn-default'
                onClick={() => this.closeModal()}>
                Cancelar
              </button>
            </div>
          </div>
        }
      />)
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
        {this.renderMordal()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary });
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary, IsNeedRefresh }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
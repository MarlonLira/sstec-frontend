import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Content from '../common/template/content';
import ContentHeader from '../common/template/contentHeader';
import Card from '../common/widget/card';
import Row from '../common/layout/row';
import SchedulingList from './schedulingList';

class Scheduling extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Reservas' />
        <Content>
          <Row>
            <Card title="Novas" btnName="Ver Tudo">
              <SchedulingList />
            </Card>
            <Card title="Prox. de Expirar" btnName="Ver Tudo">
              <SchedulingList />
            </Card>
          </Row>
        </Content>
      </div>
    );
  }
}

//const mapDispatchToProps = dispatch => bindActionCreators(null, dispatch);
export default connect(null, null)(Scheduling);
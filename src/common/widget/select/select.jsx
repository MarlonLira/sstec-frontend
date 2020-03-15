import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Grid from '../../layout/grid';
import { getList } from './selectActions';

class Select extends Component {

  componentWillMount() {
    this.props.getList(this.props.list)
  }

  renderOptions() {
    const _list = this.props.list || [];

    return _list.map(element => (
      <option key={element.value} value={element.value}>{element.name}</option>
    ))
  }

  render() {
    const { name, cols, list } = this.props;
    return (
      <Grid cols={cols}>
        <select className="custom-select" defaultValue='DEFAULT' >
          <option value='DEFAULT' disabled>{name}</option>
          {this.renderOptions()}
        </select>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ list: state.select.list });
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Select);
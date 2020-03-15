import React, {Component} from 'react';
import dayGridPlugin from 'fullCalendar/daygrid';
import FullCalendar from 'fullCalendar/react';

import './main.scss' // webpack must be configured to do this

export default class Calendar extends Component {

  render() {
    return (
      <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
    )
  }
}

//https://fullcalendar.io/docs/react
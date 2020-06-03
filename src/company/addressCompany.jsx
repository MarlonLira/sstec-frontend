import React, { Component } from 'react';
import { Map, GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps';

const WrappedMap = withScriptjs(withGoogleMap(Map))
const API_KEY = 'AIzaSyBrGTfBFa0mZ9303uZOuvW-xYxHXtHRs2k'

class AddressCompany extends Component {

  maps() {
    return <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -8.028354, lgn: -34.907345 }}
    />
  }


  render() {
    return (
      <div style={{width: '100vw', height: '100vh'}}>
        <WrappedMap googleMapUrl={
          `https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    )
  }
}

export default (AddressCompany);
import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

import Maps from "./GoogleMap";

const mapStyles = {
    marginTop: '50%',
    width: '100%',
    height: '50%'

  };

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: -33.86882,
      lng: 151.20929,
    },
    zoom: 11,
  };

  render() {
    return (
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}
export default GoogleApiWrapper({
    apiKey: 'API KEY'
  })(GoogleMap);
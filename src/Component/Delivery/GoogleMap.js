import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";


const mapStyles = {
    width: '100%',
    height: '90%',
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
    <div className = "ui container">
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
      </div>
    );
  }
}
export default GoogleApiWrapper({
    apiKey: 'Api_Key'
  })(GoogleMap);
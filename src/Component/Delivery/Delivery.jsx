import React, { Component } from "react";
import GoogleMap from "./GoogleMap";

const makeStyle = {
  segment: {
    height: "50rem",
    paddingLeft: "3rem",
    paddingRight: "2rem",
  },
  input : {
    textAlign: "center", 
    width : "25rem"
  }
};
export default class Delivery extends Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "7rem" }}>
        <div class="ui medium header" id="header">
          Some content regarding delivery
        </div>

        <div className="ui horizontal segments" style={makeStyle.segment}>
          <div className="ui segment">
            <div className="ui container">
              <div
                class="ui medium header"
                id="header"
                style={{ color: "red" }}
              >
                We deliver to 1000 zip codes
              </div>
              <div class="field">
                <div class="ui search">
                  <div class="ui icon input">
                    <input
                      class="prompt"
                      type="text"
                      placeholder="Enter your Zip code..."
                        style = {makeStyle.input}
/>
                    <i class="search icon"></i>
                  </div>
                  <div class="results"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="ui segment">
            <div className="ui container">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

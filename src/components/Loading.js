import React, { Component } from "react";
import { Eclipse } from "react-loading-io";

export default class Loading extends Component {
  render() {
    return (
      <div className="services" style={{ backgroundColor: "white" }}>
        <h4>Loading House Images</h4>
        <Eclipse size={150} />
      </div>
    );
  }
}

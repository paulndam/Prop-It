import React, { Component } from "react";

class ComponentOne extends Component {
  render() {
    return <div>{this.props.someText}</div>;
  }
}

export default ComponentOne;

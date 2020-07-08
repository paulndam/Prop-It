import React, { Component } from "react";

class Leg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "walking",
    };
  }

  moveLeg = () => {
    if (this.state.action === "walking") {
      this.setState({ action: "running" });
    } else {
      this.setState({ action: "walking" });
    }
  };

  render() {
    return (
      <fieldset>
        <p>your legs are currently {this.state.action}</p>

        <button onClick={this.moveLeg}>move leg</button>
      </fieldset>
    );
  }
}

export default Leg;

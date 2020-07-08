import React, { Component } from "react";

class PersonCard extends Component {
  render() {
    const { firstname, lastname } = this.props;
    const { age } = this.props;
    const { haircolor } = this.props;
    return (
      <div>
        <h2>
          Name:{firstname} {lastname}
        </h2>
        <h5>Age:{age}</h5>
        <h5>Hair color:{haircolor}</h5>
      </div>
    );
  }
}

export default PersonCard;

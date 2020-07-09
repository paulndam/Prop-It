import React, { Component } from "react";

const PersonCard2 = (props) => {
  return (
    <div>
      <h1>
        Name:- {props.firstname} {props.lastname}
      </h1>
      <h5>Age:- {props.age}</h5>
      <h5>Gender:- {props.gender}</h5>
      <h5>Haircolor:- {props.haircolor}</h5>
    </div>
  );
};

export default PersonCard2;

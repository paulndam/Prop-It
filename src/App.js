import React from "react";

import "./App.css";
import ComponentOne from "./components/ComponentOne";
import PersonCard from "./components/PersonCard";
import Leg from "./components/Leg";
import PersonCard2 from "./components/PersonCard2";
import Punch from "./components/Punch";

function App() {
  return (
    <div className="App">
      {/* <ComponentOne someText={"sup rico"} />
      <ComponentOne someText={"trying new stuffs here"} /> */}
      <PersonCard
        firstname={"Tito"}
        lastname={"Cassanova"}
        age={"28"}
        haircolor={"ligth gray"}
      />

      <PersonCard
        firstname={"Vito"}
        lastname={"Blanca"}
        age={"32"}
        haircolor={"dark gray"}
      />

      <PersonCard
        firstname={"Bito"}
        lastname={"Barta"}
        age={"34"}
        haircolor={"gray"}
      />

      <PersonCard
        firstname={"Rico"}
        lastname={"Ballenti"}
        age={"36"}
        haircolor={"white"}
      />

      <Leg />

      <PersonCard2
        firstname={"Eric"}
        lastname={"Tim"}
        gender={"male"}
        age={"48"}
        haircolor={"pearl white"}
      />

      <Punch />
    </div>
  );
}

export default App;

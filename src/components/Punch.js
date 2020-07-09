// here we are using a hook
// and we need to import it

import React, { useState } from "react";
//we then use a functional component
//and we can destructure and passing our argumnts
//We have just defined two variables: state and setState by calling the useState method. They will behave the same way that state behaves in a class component. We can access the current state via state and then change the state via setState
const Punch = (props) => {
  const [state, setState] = useState({
    punchCount: 0,
  });

  const punchCounting = () => {
    setState({ punchCount: state.punchCount + 1 });
  };

  return (
    <div>
      {state.punchCount}
      <p>you hurt me {state.punchCount} times</p>
      <button onClick={punchCounting}>Punch me</button>
    </div>
  );
};

export default Punch;

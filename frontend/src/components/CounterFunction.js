//imrs
import React, { useState } from "react";

const CounterFunction = () => {
  let [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h3>Functionalbase component</h3>
      <h1>Counter = {number}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default CounterFunction;

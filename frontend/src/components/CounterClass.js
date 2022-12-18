//imrc
import React, { Component } from "react";

//cc
class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  increment = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    return (
      <div>
        <h3>Classbase Component</h3>
        <h1>Counter = {this.state.number}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default CounterClass;

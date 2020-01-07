import { Component } from "react";
import React from "react";

// your Bomb code here!
class Bomb extends Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render() {
    return this.state.secondsLeft === 0 ? (
      <h1>Boom!</h1>
    ) : (
      <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
    );
  }
}

export default Bomb;

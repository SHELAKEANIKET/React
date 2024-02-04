import React, { Component } from "react";
import Student from "./Student";

export default class ComponentWillUnmount extends Component {
  constructor() {
    super();
    console.log("constructor called");
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <div>
        {this.state.show ? <Student /> : <h2>Child component removed</h2>}

        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Unmount
        </button>
      </div>
    );
  }
}

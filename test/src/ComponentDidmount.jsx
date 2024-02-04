import React, { Component } from "react";

export default class ComponentDidmount extends Component {
  constructor() {
    super();
    console.log("constructor called");
  }
  componentDidMount() {
    console.log("Didmount called");
  }
  render() {
    console.log("render is called");
    return <div>ComponentDidmount</div>;
  }
}

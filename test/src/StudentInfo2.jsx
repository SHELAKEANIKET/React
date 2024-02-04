import React, { Component } from 'react'

export default class StudentInfo2 extends Component {

    constructor(){
        super();
            }

  render() {
    return (
      <div>
        <h1>{this.props.position}</h1>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Student extends Component {

    componentWillUnmount(){
        alert('component will unmount called')
    }
  render() {
    return (
      <div>component will unmount called</div>
    )
  }
}

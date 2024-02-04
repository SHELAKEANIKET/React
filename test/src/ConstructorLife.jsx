import React, { Component } from 'react'

export default class ConstructorLife extends Component {

    constructor(){
        super();
        this.state = {data:'Aniket'}
        console.log('constructor is calling');
    }

  render() {

    console.log('render method is calling');

    return (
      <div>
        <h1>hello constructor = {this.state.data}</h1>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class ComponentDidUpdate extends Component {

    constructor() {
        super();
        console.log("constructor called");
        this.state = {
            name:'Aniket'
        }
      }

      componentDidUpdate(){
        console.log('component didupdate called');
      }

  render() {
    console.log('render is called');
    return (
      <div>
        <h1>updating methods</h1>
        <button onClick={()=>{this.setState({
            name:'Aniket Shelake'
        })}}>Update Name</button>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class ComponentShouldUpdate extends Component {
    constructor() {
        super();
        console.log("constructor called");
        this.state = {
            count:0
        }
      }

      shouldComponentUpdate(){
        console.log('should component called');
        // return true
      }

  render() {
    console.log('render called');

    return (
      <div>
        <h1>Data = {this.state.count}</h1>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Update count</button>
      </div>
    )
  }
}

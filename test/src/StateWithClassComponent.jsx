import React, { Component } from 'react'

export default class StateWithClassComponent extends Component {

    constructor(){
        super();
        this.state = {
            data:"Aniket",
            count:0
            }
    }

    updateData() {
        this.setState({data:"Shelake"})
    }
    increase() {
        this.setState({count:this.state.count+1})
    }
    decrease() {
        this.setState({count:this.state.count-1})
    }

  render() {
    return (
      <div>
        <h1>my name is {this.state.data}</h1>
        <h1>Count {this.state.count}</h1>
        <button onClick={()=>this.updateData()}>Update</button>
        <button onClick={()=>this.increase()}>Increase</button>
        <button onClick={()=>this.decrease()}>Decrease</button>
      </div>
    )
  }
}

// the state is a built in react object i.e. used to content data or info. about the component
// a components state can change overtime, whenever it changes the components rerenders
// the props are a type of object where the value of attributes of a tag is stored
// the word props implies properties
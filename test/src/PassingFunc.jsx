import React from 'react'
import FunctionData from './FunctionData'

function PassingFunc() {
    function getData(){
        alert('hello function')
    }
  return (
    <div>
        <FunctionData getData={getData}/>
    </div>
  )
}

export default PassingFunc

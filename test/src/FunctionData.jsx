import React from 'react'

function FunctionData({getData}) {
  return (
    <div>
       <h2>Function Passing as a argument</h2>
       <button onClick={()=> getData()}>Data Using func</button>
    </div>
  )
}

export default FunctionData

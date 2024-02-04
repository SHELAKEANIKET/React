import React, { useState } from 'react'

function GetInputBox() {
 
    const [data,setDate] = useState(null)
    const [value,setValue] = useState(false)
    
    function getData(e){
        console.log(e.target.value);
        setDate(e.target.value)
    }

  return (
    <div>
      <h1>Getting Input Box Value</h1>
      {/* <h2>{data}</h2> */}
      
      {
        value
        ?
        <h2>{data}</h2>
        : null
      }
      <input type="text" onChange={getData} />
      <button onClick={()=>setValue(true)}>Click Here</button>
    </div>
  )
}

export default GetInputBox

import React, { useState } from 'react'

function ChildComp({func}) {

    const [data,setData] = useState(null);

   function sendData(){
        setData('Aniket Shelake');
        func(data);
   } 
  return (
    <div>
      <h1>child component</h1>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  )
}

export default ChildComp

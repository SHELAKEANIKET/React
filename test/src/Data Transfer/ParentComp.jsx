import React, { useState } from 'react'
import ChildComp from './childComp';

function ParentComp() {
  const [dataFromChild,setDataFromChild] = useState();

  function handleChildData(data){
    setDataFromChild(data)
  }
  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Data From Child : {dataFromChild}</h2>
      <br /> <br />
      <ChildComp func={handleChildData}/>
    </div>
  )
}

export default ParentComp

import React, { useRef } from 'react'

function UseRefHookReact() {

  const data = useRef(null);

  function show(){
    data.current.value = 'aniket shelake'
    data.current.style.color = 'red'
  }

  return (
    <div>
        <h1>useRef react hook</h1>
      <input ref={data} type="text" placeholder='type here' />
      <button onClick={show}>Show Data</button>
    </div>
  )
}

export default UseRefHookReact

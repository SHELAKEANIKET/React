import React,{useRef} from 'react'
import ForwardRefChildComp from './ForwardRefChildComp';

function ForwardRefParentComp() {
    const inp = useRef(null);

    function show()
    {
        inp.current.value = "aniket shelake"
        inp.current.style.color="red"
        inp.current.style.backgroundColor="yellow"
    }
  return (
    <div>
      <h1>ForwardRef in ReactJs</h1>
      <h2>parent component</h2>
      <ForwardRefChildComp ref = {inp}/>
      <br />
      <button onClick={show}>Update</button>
    </div>
  )
}

export default ForwardRefParentComp

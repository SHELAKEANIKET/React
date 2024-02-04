import React, { useState } from 'react'

function FormHandling() {
    const [name,setName] = useState('')
    const [interest,setInterest] = useState('')
    const [terms,setTerms] = useState(false)

    function getFormData(e){
        e.preventDefault()
        console.warn(name);
        console.warn(interest);
        console.warn(terms);
    }
  return (
    <div>
      <h1>Handling Forms in React</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder='Enter Name' onChange={(e)=>{
            setName(e.target.value)
        }} />
        <br />
        <select onChange={(e)=>{
            setInterest(e.target.value)
        }}>
        <option value="" >Select Here</option>
        <option value="java" >Java</option>
        <option value="c++" >C++</option>
        <option value="javascript" >JavaScript</option>
        </select>
        <br />
        <input type="checkbox" onChange={(e)=>{
            setTerms(e.target.checked)
        }} /> <span>Accept T&C</span>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormHandling

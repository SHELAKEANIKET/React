import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Student() {
  return (
    <div style={{margin:'18px'}}>
      <Link to='./student1'>Student 1</Link>
      <br /> <br />
      <Link to='./student2'>Student 2</Link>
      <br /> <br />
      <Outlet/>
    </div>
  )
}

export default Student

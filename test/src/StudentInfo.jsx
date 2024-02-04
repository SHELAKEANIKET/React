import React from 'react'

function StudentInfo({data,text}) {
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.id}</h1>
      <h1>{data.branch}</h1>
      <h2>{text}</h2>
    </div>
  )
}

export default StudentInfo

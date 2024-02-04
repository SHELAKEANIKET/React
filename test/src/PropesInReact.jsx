import React from 'react'

function PropesInReact({text:{name},data}) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{data}</h1>
    </div>
  )
}

export default PropesInReact

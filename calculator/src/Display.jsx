import React from 'react'

function Display({data}) {
  return (
    <div className='display'>
      <input type="text"
      readOnly
     value={data}
     />
    </div>
  )
}

export default Display

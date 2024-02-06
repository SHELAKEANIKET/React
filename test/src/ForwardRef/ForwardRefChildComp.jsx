import React, { forwardRef } from 'react'

function ForwardRefChildComp(props,ref) {
  return (
    <div>
        <h4>input in the child component</h4>
      <input type="text" ref={ref} />
    </div>
  )
}

export default forwardRef(ForwardRefChildComp)

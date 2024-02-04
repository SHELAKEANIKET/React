import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {

    const navigate = useNavigate();

    function handleBtn () {
        navigate('/')
    }

  return (
    <div>
      <h2 style={{color:'red', margin:'48px'}}>404 page not found ...!</h2>
      <button onClick={handleBtn}>Back to Home Page</button>
    </div>
  )
}

export default PageNotFound

import React from "react"
import {useLocation} from 'react-router-dom';

const Home = () => {
  const location=useLocation()

  return (
    <div className='my-32'>
      <h1 className='text-slate-100 text-center text-2xl'>Hello and welcome to the my website</h1>
    </div>
  )
}

export default Home

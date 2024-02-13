import React from 'react'
import { useWeather } from '../context/WeatherContextProvider';

function UserInput() {

    const {city,setCity,fetchData} = useWeather();

    return (
    <div className='user-input'>
      <input className='input-box' type="search" placeholder='Enter location ...'
      value={city}
      onChange={(e)=>setCity(e.target.value)} />
      <button className='btn' onClick={fetchData}>Search</button>
    </div>
  )
}

export default UserInput

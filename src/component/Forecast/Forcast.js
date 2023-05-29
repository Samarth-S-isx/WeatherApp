import React from 'react'
import CurrentDay from '../CurrentDay/CurrentDay';
import DayDescription from '../DayDescription/DayDescription';
import './Forcast.css'

function Forecast({weather}) {
  console.log(weather.currentDay,"hi")
  return (
    <>
    <div className='box container'>
      <div className='row'>
        <div className='col-6'>
          <CurrentDay data={weather.currentDay}></CurrentDay>
        </div>
        <div className='d-flex col-6'>
          <DayDescription data= {weather.currentDayDetail}></DayDescription>
        </div>
      </div>
    </div>
    </>
  )
}

export default Forecast


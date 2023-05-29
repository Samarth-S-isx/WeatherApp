// import locationIcon from './assets/location-pin.png';
import React from 'react'
import './CurrentDay.css'
function CurrentDay({data}) {
  return (
    <div className='d-flex'>
         <div className="cardInner d-flex flex-column justify-content-between pt-3 pb-2 pl-2">
         <div>
                <h2 className="font-weight-bold mb-1">{data.weekday}</h2>
                <p className="mb-0">{data.date}</p>
                <p className="d-flex align-items-baseline font-weight-lighter mb-1">
                    <img width="10" height="15" src='https://res.cloudinary.com/demonslayer/image/upload/v1685355506/location-pin_d5clbd.png' className="mr-1" alt="location pin icon" />
                    <span>{data.location}</span>
                </p>
            </div>
            <div>
                <img width="45" src={data.weatherIcon} alt="" />
                <h2 className="font-weight-bold mb-1">
                    <span>{data.temperature}</span>°C
                </h2>
                <h5 className="font-weight-lighter">{data.weatherDescription}</h5>
            </div>
         </div>
    </div>
  )
}

export default CurrentDay

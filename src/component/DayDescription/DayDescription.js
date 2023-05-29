import React from 'react'
import DayDescriptionItem from './DayDescriptionItem'
import './DayDescription.css'


function DayDescription({data}) {


  const handleClick=()=>{
    window.location.reload()
  }

  return (
    <div className="d-flex mt-4 mt-md-2 day-description position-relative">
        <div className="d-flex flex-column mb-2 w-100">
            {data.map(info => (
                <DayDescriptionItem info={info} key={info.name} />
            ))}
        </div>
        <div className='position-absolute bottom-0 w-100 mb-3'>
        <button className='button' onClick={handleClick}>Reset</button>
        </div>
    </div>
  )
}

export default DayDescription

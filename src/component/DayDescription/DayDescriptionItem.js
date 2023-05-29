import React from 'react'

function DayDescriptionItem({info}) {
  return (
    <div className="d-flex justify-content-between">
        <p className="mb-0 font-weight-bolder text-uppercase">{info.name}</p>
        <p className="mb-0">
            {info.value} {info.unit}
        </p>
    </div>
  )
}

export default DayDescriptionItem

import React from 'react'

function Error({message}) {
  return (
    <div className="position-absolute bottom-0 alert error" role="alert">
        {message.length===0?'Some Error Occured':message}
    </div>
  )
}

export default Error

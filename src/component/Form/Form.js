import React, { useState } from 'react'
import './Form.css'


function Form({getCity}) {

    const [city,setCity] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        getCity(city)
    }
    const handleChange=(e)=>{
        setCity(e.target.value)   
    }

  return (
    <form onSubmit={handleSubmit}>
        <input aria-label="location" type="text" className="input form-control" placeholder="Search for location" required value={city} onChange={handleChange}/>

        <button type="submit" className="button">
            SEARCH
        </button>
    </form>
  )
}

export default Form

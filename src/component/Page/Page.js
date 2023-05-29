import React from 'react'
import Form from '../Form/Form'
import useForcast from '../../hooks/useForcast'
import Loader from '../Loader/Loader'
import Forcast from '../Forecast/Forcast'
import Error from '../Error/Error'
import "./Page.css"

function Page() {
    const {weather,loading,getWeather,error} =  useForcast()

    const getCity=(city)=>{
        // console.log(city)
        getWeather(city)
    }


  return (
    <>
       <h1 className="heading">
        <span className="light">Current</span> Weather
        </h1>
        { !weather&&<>
        {!loading&&<div className='box position-relative'>
          <Form getCity={getCity}></Form>
          {error.length!==0&&<Error message={error}></Error>}
        </div>}
        </>}
        {loading&&<Loader></Loader>}
        {/* {!forecast&&<Forcast forecast={forecast}></Forcast>} */}
        {weather &&<Forcast weather={weather}></Forcast>}
    </>
  )
}

export default Page

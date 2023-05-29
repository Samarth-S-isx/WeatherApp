import React from 'react'
import Form from '../Form/Form'
import useWeather from '../../hooks/useWeather'
import Loader from '../Loader/Loader'
import WeatherInfo from '../WeatherInfo/WeatherInfo'
import Error from '../Error/Error'
import "./Page.css"

function Page() {
    const {weather,loading,getWeather,error} =  useWeather()

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
        {weather &&<WeatherInfo weather={weather}></WeatherInfo>}
    </>
  )
}

export default Page

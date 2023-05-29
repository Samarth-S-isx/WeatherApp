import { useState } from "react"
import moment from 'moment'

const API_KEY = "87abe90f90754e49864161211232805"
const URL = 'http://api.weatherapi.com/v1/'



const useForcast=()=>{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [weather, setWeather] = useState(null)
    const getWeather = async(city)=>{
        setLoading(true)
        const params={
            key:API_KEY,
            q:city,
            aqi:"no",
            alerts:"no"
        }
        const queryString = new URLSearchParams(params).toString();
        const response = await fetch(URL+`current.json?${queryString}`)
        const result = await response.json()
        console.log(result)
        if(result.error){
            setLoading(false)
            setError(result.error.message)
            return;
        }else{
            CurrentDay(result)
        }
        
    }

    const CurrentDay=(data)=>{
        const currentDay = {
            weekday: moment(data.location.localtime.split(" ")[0]).format('dddd'),
            date: moment(data.location.localtime.split(" ")[0]).format('MMMM Do'),
            location: data.location.name,
            temperature: Math.round(data.current.temp_c),
            weatherIcon: data.current.condition.icon,
            weatherDescription: data.current.condition.text
        }
        const currentDayDetail=[
            {
                name: 'humidity',
                value: data.current.humidity,
                unit: '%',
            },
            {
                name: 'air pressure',
                value: data.current.pressure_mb,
                unit: 'mb',
            },

            {
                name: 'wind',
                value: data.current.wind_kph,
                unit: 'kmph',
            },
            {
                name: 'feelslike',
                value: Math.round(data.current.feelslike_c),
                unit: '°C',
            },
        ]
        setWeather({currentDay,currentDayDetail})
        setLoading(false)
    }

    
    return{
        loading,weather,getWeather,error
    }
}
export default useForcast
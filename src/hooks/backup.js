import { useState } from "react"

const API_KEY = "87abe90f90754e49864161211232805"
const URL = 'http://api.weatherapi.com/v1/'
const GEO_URL = "https://geocoding-by-api-ninjas.p.rapidapi.com/v1/geocoding?"



const useForcast=()=>{
    const [loading, setLoading] = useState(false)
    const [forecast, setForecast] = useState(null)
    


    
    const getForecast = async(city)=>{
        const geo_options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '82973851c8msh51f863dbff23edep1c9c27jsn6a55d88fd64c',
                'X-RapidAPI-Host': 'geocoding-by-api-ninjas.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(GEO_URL+`city=${city}`, geo_options);
            const result = await response.text();
            console.log(result);
            console.log(GEO_URL+`${city}`, geo_options)
        } catch (error) {
            console.error(error);
        }
    }
    
    return{
        loading,forecast,getForecast
    }
}
export default useForcast
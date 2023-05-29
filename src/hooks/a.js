import { useState } from "react"

const API_KEY = "87abe90f90754e49864161211232805"
const URL = 'http://api.weatherapi.com/v1/'




const useForcast=()=>{
    const [loading, setLoading] = useState(false)
    const [forecast, setForecast] = useState(null)
    


    
    const getForecast = async(city)=>{
        // const params={
        //     key:'87abe90f90754e49864161211232805',
        //     q:city,
        //     days:'7',
        //     aqi:"no",
        //     alerts:"no"
        // }
        // const queryString = new URLSearchParams(params).toString();
        // const response = await fetch(URL+`forecast.json?${queryString}`)
        // console.log(response.url===URL+`forecast.json?${queryString}`)
        // console.log(URL+`forecast.json?${queryString}`)
        // console.log(response)
        const url = 'https://open-weather13.p.rapidapi.com/city/landon';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '82973851c8msh51f863dbff23edep1c9c27jsn6a55d88fd64c',
                'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
    
    return{
        loading,forecast,getForecast
    }
}
export default useForcast
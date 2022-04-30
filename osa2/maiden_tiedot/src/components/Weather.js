import {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = ({capital}) => {
    const [weather, setWeather] = useState()
    const api_key = process.env.REACT_APP_API_KEY

    //https://api.openweathermap.org/data/2.5/weather?q=${capital}&APPID=${api_key}
    //http://localhost:3002/saat

    useEffect(() => {
        //console.log("Effect Säät")
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&APPID=${api_key}`)
            .then(response => {
              //console.log("responseData", response.data)
              setWeather(response.data)
            })
      },[])

    if (weather != null) {
        //console.log("weather", Object.keys(weather))

        const kelvin = parseInt(weather.main.temp)
        const celcius = (kelvin-273.15)
        const icon = weather.weather[0].icon
        const source = `http://openweathermap.org/img/wn/${icon}@2x.png`

        return(
            <div>
                <h1>Weather in {capital}</h1>
                <div>temperature {celcius.toFixed(2)} Celcius</div>
                <div>
                    <img src={source} alt="icon" />    
                </div>
                <div>wind {weather.wind.speed} m/s</div>
            </div>
        )
    }    
}

export default Weather
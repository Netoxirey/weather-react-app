import { useContext } from "react"
import { WeatherContext } from "../context/WeatherContext"


function WeatherToday() {
    const  {weather, weatherIcon} = useContext(WeatherContext)
  return (
    <div className="weather">
        <div>
          <h3 className="weather_today"><img src={weatherIcon[weather.weather]} alt={`icon of ${weather.weather}`} className="weather_icon_today"/> {Math.round(weather.temp - 273.15)}º</h3>
        </div>
        <p className="weather_name">{weather.name}</p>
        <p className="weather_weather">{weather.weather}</p>
        <p>Feels like {Math.round(weather.feels - 273.15)}º</p>
    </div>
  )
}

export default WeatherToday
import {useContext} from 'react'
import { WeatherContext } from '../context/WeatherContext'
import WeatherHourlyCard from './WeatherHourlyCard'

function WeatherHourly() {
    const {weatherHourly, weatherIcon} = useContext(WeatherContext)
  return (
    <div className=' container weather_hourly'>
        {weatherHourly?.map(weather => (
            <WeatherHourlyCard weather={weather} weatherIcon={weatherIcon}/>
        ))}
    </div>
  )
}

export default WeatherHourly
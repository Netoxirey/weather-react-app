import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Clear from "../assets/clear.png"
import Clouds from "../assets/clouds.png"
import Rain from "../assets/rain.png"

export const WeatherContext = createContext();

export function WeatherContextProvider(props) {

  const [city, setCity] = useState("London");
  const [lat, setLat] = useState(51.5073);
  const [results, setResults] = useState([])
  const [lon, setLon] = useState(-0.1276);
  const [weather, setWeather] = useState({})
  const [modal, setModal] = useState(false)
  const [weatherHourly, setWeatherHourly] = useState([])

  const weatherIcon = {
    Clear,
    Clouds,
    Rain,
}

  useEffect(() => {
    if(!city) {
        return
    }
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${import.meta.env.VITE_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      setResults(data)
    })
}, [city])

useEffect(() => {
  if(!lat || !lon){
    return
  }
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`)
  .then(response => response.json())
  .then(data => {
    setWeather({
      name: data.name,
      weather: data.weather[0].main, 
      temp: data.main.temp,
      feels: data.main.feels_like,
    })}
    )
}, [lat,lon])

useEffect(() => {
  if (!lat || !lon) {
    return;
  }
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`)
    .then(response => response.json())
    .then(data => setWeatherHourly(data.list.slice(0,5)))
    .catch(error => console.error(error));
}, [lat, lon]);





  return (
    <WeatherContext.Provider value={{
      setCity,
      results,
      setLat,
      setLon,
      weather,
      modal,
      setModal,
      weatherHourly,
      weatherIcon,
    }}>
        {props.children}
    </WeatherContext.Provider>
  );
}

WeatherContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

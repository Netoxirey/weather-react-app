

function WeatherHourlyCard( {weather, weatherIcon}) {

    
    const timestamp = weather.dt * 1000;
    const date = new Date(timestamp);
    const everyThree = date.toLocaleTimeString('en-US', { hour12: true });
  return (
    <div className="weather_hourly_card">
        <h3 className="weather_hourly_temp"><img src={weatherIcon[weather.weather[0].main]} alt={`icon of ${weather.weather[0].main}`}className="weather_icon_hourly" /> {Math.floor(weather.main.temp - 273.15)}º</h3>
        <p className="weather_weather_hourly">{weather.weather[0].main}</p>
        <p>{everyThree}</p>
    </div>
  )
}

export default WeatherHourlyCard
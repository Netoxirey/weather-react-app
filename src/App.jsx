import WeatherForm from "./components/WeatherForm"
import WeatherHourly from "./components/WeatherHourly"
import WeatherToday from "./components/WeatherToday"

function App() {

  return (
    <>
      <WeatherForm/>
      <div className="container, main_weather">
        <WeatherToday/>
        <WeatherHourly/>
      </div>
      
    </>
  )
}

export default App

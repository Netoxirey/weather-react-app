import { useContext } from "react"
import { WeatherContext } from "../context/WeatherContext"
import LocationCard from "./LocationCard"

function LocationResult() {
   const {results, setLat, setLon, setModal} = useContext(WeatherContext)
  return (
    <div className="container results">
        {results?.map(result => (
            <LocationCard result={result} setLat={setLat} setLon={setLon} setModal={setModal}/>
        ))}
    </div>
  )
}

export default LocationResult
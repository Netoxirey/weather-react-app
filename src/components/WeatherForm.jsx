import { useContext, useState } from "react"
import { WeatherContext } from "../context/WeatherContext"
import LocationResult from "./LocationResult"
import {BsSearch} from "react-icons/bs"

function WeatherForm() {
  const {setModal, modal} = useContext(WeatherContext)
  const { setCity } = useContext(WeatherContext)
  const [query, setQuery] = useState("")
  const [error, setError] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!query) {
      return setError(true)
    }
    setModal(true)
    setError(false)
    return setCity(query)
  }
  
  return (
    <div className="container">
    {error && <p>Todos los campos son obligatorios</p>}
    <form onSubmit={handleSubmit} className="searcher_form">
        <BsSearch className="searcher_icon"/>
        <input onChange={e => setQuery(e.target.value)} type="text"  className="searcher" placeholder="Your city."/>
    </form>
    {modal && <LocationResult/>}
    </div>
    
  )
}

export default WeatherForm
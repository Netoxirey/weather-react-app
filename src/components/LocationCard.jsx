
function LocationCard({result,setLat,setLon, setModal}) {
  return (
    <div onClick={(e) => {
        setLat(result.lat) 
        setLon(result.lon)
        setModal(false)
        }}
        className="result"
        >
        <p>{result.name},</p>
        <p>{result.country}.</p>
    </div>
  )
}

export default LocationCard
import React from 'react'

function Detalle({item}) {
  return (
   <div>
            <h2>City:{item.name}</h2>
            <p>State: {item.state}</p>
            <p>ID: {item._id}</p>
            <p>CityId: {item.cityid}</p>
            <h3>Probability: {item.probabilityofprecip} </h3>
            <h3>Humidity: {item.relativehumidity}</h3>
            {item.probabilityofprecip > 60 || item.relativehumidity > 50 ? "Llueve":"no llueve"}
            <p>Report:{item.lastreporttime}</p>
          
          </div>
  )
}

export default Detalle
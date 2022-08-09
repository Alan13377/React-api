import { useState,useEffect } from 'react'
import "./app.scss"
import Detalle from './components/Detalle';


function App() {
  
  const [citys,setCity] = useState([]);
  useEffect(() => {
    const api = async () =>{
      const response = await fetch("https://api.datos.gob.mx/v1/condiciones-atmosfericas");
      const data = await response.json();
      console.log(data.results);
      setCity(data.results)
    }

    api()
  },[])
  

  return (
  <div className='container'>
   <div className="grid">
      {

       citys.map(item =>{
        return (
          <div>
          {
            <p>{citys.length}</p>
          }
          <Detalle item={item}/>
          
          </div>
        )
       })

      }
    </div>
    </div>
   
  )
}

export default App

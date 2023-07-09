
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import For from './for';


function App() {
  const [data,setD]=useState(null);
  async function call(e){
  axios.get(`https://wether-express.onrender.com/?loc=${e}`).then((res)=>{
    setD(res.data);  
 })
  console.log(data);
}

  return (
    <div className="App">
    <form onSubmit={(e)=>{call(e.target[0].value); e.preventDefault();}}>
    <input type='text' placeholder='Ex : Ongole' />
     <button>find</button>
     </form>
     {data&&
     
     <div>
     <hr />
     <h3>current wether</h3>
     <div className='first'>
     <div>
     <img src={data.current.condition.icon} alt = "icon"/>
     <h1 style={{"display":"inline"}}>{data.current.temp_c}°C</h1>
     <i>feels like {data.current.feelslike_c}</i>
     </div>
     <span>{data.location.name}</span>
     <span>{data.current.condition.text}</span>
     
     <ol>
      <li>Wind(kmph) : {data.current.wind_kph}</li>
      <li>Humidity : {data.current.humidity}</li>
      <li>Precipitation(mm) : {data.current.precip_mm}</li>
     </ol>
    </div>
     <hr />
     <h3>Forcaste</h3><div className='for'>{
     data.forecast.forecastday.map((day)=>{
      return(<For avg={day.day.avgtemp_c} date={day.date} text={day.day.condition.text} icon={day.day.condition.icon}  />)
     })
     } 
     </div></div>
     }
    </div>
  );
}

export default App;

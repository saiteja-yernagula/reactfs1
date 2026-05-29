import { useState } from "react";
import axios from "axios";

function Weather() {
  let [city, setCity] = useState("");
  let [details,setDetails]=useState(null)
  async function fetchdata() {
    let val =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=466ddaa21a8de191e9f608bd11a56acb`)
    setDetails(val.data)
  }
  return (
    <div>
      <h1>weather app</h1>
      <input type="text"className="textfield"
        value={city} placeholder="Enter city Name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchdata}>get weather</button>
      {details && (<h1>{details.main.temp}</h1>)}
    </div>
  );
}

export default Weather;

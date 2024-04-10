
import React,{useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function WeatherAppReacteather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
  
    function handleResponse(response) {
      setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
        wind: response.data.wind.speed,
        city: response.data.name,
      });
    }


    function search() {
        const apiKey = "e08ff04e756ab6a30t3eb7172o1c9fa9";
        let apiUrl = `https://api.openweathermap.org/data2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        search();
      }
    
      function handleCityChange(event) {
        setCity(event.target.value);
      }

    if(weatherData.ready){
return(
    <div className="weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
            <div className="col-9">
            <input type="search" 
            placeholder="Search city"
            className="form-control"
            autoFocus="on"/>
             </div>
             <div className="col-3">
            <input type="submit"
             placeholder="Search" className="btn btn-primary w-100" />
             </div> 
             </div>
        </form>

    <h1>{weatherData.city}</h1>
    <ul>
<li>{weatherData.date}</li>
<li className="text-capitalize">{weatherData.description}</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
            <div className="clearfix">
            <img src={weatherData. iconUrl} alt="{weatherData.description}"
            className="float-left"/>
            <div className="float-left">
           <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>
           </div>
           </div>
        </div>
        <div className="col-6">
        <ul>
<li>Precipitation:1%</li>
<li>Humidity:{weatherData.humidity}%</li>
<li>Wind:{weatherData.wind}km/h</li>
    </ul> 
        </div>
    </div>
</div>
);
    }else{
        const apiKey="e08ff04e756ab6a30t3eb7172o1c9fa9";  
       let apiUrl=`https://api.shecodes.io/weather/v1/current?=${props.defaultCity}}&key=${apiKey}&units=metric`;
       axios.get(apiUrl).then(handleResponse);
       return "Loading.." 
    }
}
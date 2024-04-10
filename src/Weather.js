
import React from "react";
import Weather from "./Weather.css";

export default function WeatherAppReacteather() {
    

return(
    <div className="weather">
        <form>
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

    <h1>Pretoria</h1>
    <ul>
<li>Tuesday 16:00</li>
<li>Sunny</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
            <div className="clearfix">
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"alt="sunny"
            className="float-left"/>
            <div className="float-left">
           <span className="temperature"> 24</span><span className="unit">°C</span>
           </div>
           </div>
        </div>
        <div className="col-6">
        <ul>
<li>Precipitation:1%</li>
<li>Humidity:34%</li>
<li>Wind:23km/h</li>
    </ul> 
        </div>
    </div>
</div>
);
}
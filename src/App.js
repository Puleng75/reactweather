import React from "react";
import Weather from "./Weather";
import "./App.css";
function App() {

  return (
    <div className="App">
      <div className="container">
    <h1>Weather App</h1>
    <Weather defaultyCity="Pretoria"/>
      <footer>This project was coded by {" "}<a href="https://www.puleng.com" target="_blank" rel="noreferrer">Puleng Dlamini</a>and is
        {""} <a href="https://github.com/Puleng75/reactweather" target="_blank" rel="noreferrer">Open-sourced on Github</a>
        and {""} <a href="/" target="_blank" rel="noreferrer">Netlify</a>.
</footer>
    </div>
    </div>
  );
}


export default App;

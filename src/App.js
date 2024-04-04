import Weather from "./Weather.js";


function App() {

  return (
    <div className="App">
    <h1>Weather App</h1>
    <Weather/>
    <br/>

    <p>⛈15°C</p>
      <footer>This project was coded by {" "}<a href="https://www.puleng.com" target="_blank" rel="noreferrer">Puleng Dlamini</a>and is
        {""} <a href="https://github.com/puleng75/WeatherAppReact" target="_blank" rel="noreferrer">Open-sourced on Github</a>
</footer>
    </div>
  );
}


export default App;

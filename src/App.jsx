import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./assets/components/Loader";
import Weather from "./assets/components/Weather";

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();
  const success = (poss) => {
    const currentCoords = {
      lat: poss.coords.latitude,
      lont: poss.coords.longitude,
    };
    setCoords(currentCoords);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);
  useEffect(() => {
    if (coords) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lont}&appid=771cd49f9c87edb6dea934e9af9636d7`;
      axios
        .get(URL)
        .then((res) => {
          setWeather(res.data);
          const celsius = (res.data.main.temp - 273.15).toFixed(1);
          const fahrenheit = (celsius * (9 / 5) + 32).toFixed(1);
          const newTemps = {
            celsius,
            fahrenheit,
          };
          setTemp(newTemps);
        })
        .catch((err) => console.log(err));
    }
  }, [coords]);

  return (
    <div className="App flex justify-center items-center min-h-screen bg-[url('/public/images/img.jpg')] bg-cover px-2">
      {weather ? <Weather weather={weather} temp={temp} /> : <Loader />}
    </div>
  );
}

export default App;

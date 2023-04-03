import React, { useState } from "react";
import "./Loader.css";

const Weather = ({ weather, temp }) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const changeUnitTemp = () => {
    setIsCelsius(!isCelsius);
  };
  return (
    <section className=" ">
      <h2 className="text-center mb-4 text-3xl font-semibold tracking-wider">
        {weather.name},{weather.sys.country}
      </h2>
      <section className=" grid gap-4 text-xl sm:grid-cols-two">
        <article className="grid grid-cols-2 justify-items-center items-center bg-slate-400/60 text-2xl rounded-3xl  py-2 sm:px-2">
          <h3 className=" col-start-1 col-end-3 capitalize font-medium">
            {weather.weather[0].description}
          </h3>

          <h2 className="mb-2 font-bold  text-[45px] ">
            {isCelsius ? `${temp.celsius} ºC` : `${temp.fahrenheit} ºF`}
          </h2>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt=""
            />
          </div>
        </article>

        <article className="grid grid-cols-3 py-3 bg-slate-400/60 text-2xl rounded-3xl sm:grid-cols-1 sm:px-2 sm:py-0 ">
          <div className="flex text-lg items-center ">
            <div>
              <img src="/public/images/viento.png" alt="" />
            </div>
            <h5>{weather.wind.speed} m/s</h5>
          </div>

          <div className="flex text-lg items-center">
            <div>
              <img src="/public/images/humedad.png" alt="" />
            </div>
            <h5>{weather.main.humidity} %</h5>
          </div>

          <div className="flex text-lg items-center">
            <div>
              <img src="/public/images/presion.png" alt="" />
            </div>
            <h5>{weather.main.pressure} hPa</h5>
          </div>
        </article>
      </section>
      <button
        onClick={changeUnitTemp}
        className=" px-6 py-2 rounded-full font-bold text-white bg-blue-400 hover:bg-blue-800 duration-200 text-sm block mx-auto mt-5 animate-bounce"
      >
        Changes ºC/ºf
      </button>
    </section>
  );
};

export default Weather;

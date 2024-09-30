import React, { useState } from "react";
import WeatherCss from "../css/WeatherApp.module.css";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";

function WeatherApp() {
  let [city, setCity] = useState("");
  let [weatherInfo, setWeatherInfo] = useState(null);

  let fetchApi = async () => {
    let apiKey = "b710e1b242363cc766f242a320cf5365";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // let apiUrl = `https://google.com`;

    try {
      let data = await fetch(apiUrl);
      let finalData = await data.json();
      if (finalData.cod === 200) {
        setWeatherInfo(finalData);
        console.log(finalData);
      } else {
        console.log("City doesn't exist");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className={WeatherCss.searchHeader}>
        <input
          type="text"
          placeholder="Enter the city name"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button onClick={fetchApi}>Get Weather</button>
      </div>
      <div className={WeatherCss.resultSection}>
        {weatherInfo && (
          <div className={WeatherCss.searchResult}>
            <div className={WeatherCss.cardTop}>
              <div className={WeatherCss.cityDetails}>
                <h1>{weatherInfo.name}</h1>
                <h6>
                  <i>{weatherInfo.sys.country}</i>
                </h6>
                <p>
                  Lat : {weatherInfo.coord.lat}
                  <span /> | Long : {weatherInfo.coord.lon}
                </p>
              </div>
              <div className={WeatherCss.weatherDetails}>
                <h2>{weatherInfo.main.temp}°C</h2>
                <h4>{weatherInfo.weather[0].description}</h4>
                <div>
                  <div className={WeatherCss.coldTemp}>
                    <FaTemperatureArrowDown /> : {weatherInfo.main.temp_min}°C{" "}
                  </div>
                  &nbsp; <span /> | &nbsp;
                  <div className={WeatherCss.hotTemp}>
                    <FaTemperatureArrowUp /> : {weatherInfo.main.temp_max}°C
                  </div>
                </div>
              </div>
            </div>
            <div className={WeatherCss.cardBottom}>
              <p>
                Humidity : {weatherInfo.main.humidity}
                &nbsp; <span /> | &nbsp; Pressure : {weatherInfo.main.pressure}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;

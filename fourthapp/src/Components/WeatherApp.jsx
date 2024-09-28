import React, { useState } from "react";

function WeatherApp() {
  let [city, setCity] = useState("");
  let [weatherInfo, setWeatherInfo] = useState(null);

  let fetchApi = async () => {
    let apiKey = "b710e1b242363cc766f242a320cf5365";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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
      <input
        type="text"
        placeholder="Enter the city name"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button onClick={fetchApi}>Get Weather</button>
      <div>
        {weatherInfo && (
          <>
            <h1>City Name : {weatherInfo.name}</h1>
            <h2>Temperature : {weatherInfo.main.temp}</h2>
            <h2>Country : {weatherInfo.sys.country}</h2>
            <h2>Weather Description : {weatherInfo.weather[0].description}</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;

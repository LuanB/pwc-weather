import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/appContext";
import WeatherCard from "../WeatherCard";
import "./WeatherCardContainerStyles.css";

export default function WeatherCardContainer() {
  const appContext = useContext(AppContext);

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (appContext.forecastWeatherData) {
      setWeatherData(appContext.forecastWeatherData);
    }
  }, [appContext.forecastWeatherData]);

  return (
    <>
      <div>Weather Card Container</div>
      {weatherData ? (
        weatherData.map((weather, key) => (
          <WeatherCard
            key={key}
            date={weather.valid_date}
            weather={weather.weather}
            max_temp={weather.max_temp}
            min_temp={weather.min_temp}
            uv={weather.uv}
          />
        ))
      ) : (
        <div>no data yet</div>
      )}
    </>
  );
}

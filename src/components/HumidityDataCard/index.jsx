import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import "./HumidityDataCardStyles.css";

export default function HumidityDataCard() {
  // check for lat or long in context and then get humidity data

  const appContext = useContext(AppContext);

  if (!appContext.currentWeather) {
    return <h1>No weather data for current location yet</h1>;
  }

  const { precip, aqi, wind_spd, wind_cdir, uv } = appContext.currentWeather;

  return (
    <div className="Humidity">
      <p>Precipitation: {precip} %</p>
      <p>Humidity: {aqi}%</p>
      <p>
        Wind: {wind_spd} kph {wind_cdir}
      </p>
      <p>UV: {uv}</p>
    </div>
  );
}

import React from "react";
import { ConvertToFahrenheit } from "../../utils/utils";
import "./WeatherCardStyles.css";

export default function WeatherCard(props) {
  const { date, weather, max_temp, min_temp, uv, metric } = props;

  const max = metric ? max_temp + " °C" : ConvertToFahrenheit(max_temp) + " °F";
  const min = metric ? min_temp + " °C" : ConvertToFahrenheit(min_temp) + " °F";

  return (
    <div className="WeatherCard">
      <p>{date}</p>
      <p>{weather.description}</p>
      <p>max: {max}</p>
      <p>Min: {min}</p>
      <p>UV: {uv}</p>
    </div>
  );
}

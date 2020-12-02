import React from "react";
import "./WeatherCardStyles.css";

export default function WeatherCard(props) {
  const { date, weather, max_temp, min_temp, uv } = props;

  return (
    <div className="WeatherCard">
      <p>{date}</p>
      <p>{weather.description}</p>
      <p>max: {max_temp}</p>
      <p>Min: {min_temp}</p>
      <p>UV: {uv}</p>
    </div>
  );
}

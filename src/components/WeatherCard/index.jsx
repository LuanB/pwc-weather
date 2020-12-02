import React from "react";

export default function WeatherCard(props) {
  const { valid_date, weather, max_temp, min_temp, uv } = props;

  return (
    <>
      <div>Weather Card component</div>
      <p>{valid_date}</p>
      <p>{weather.description}</p>
      <p>{max_temp}</p>
      <p>{min_temp}</p>
      <p>{uv}</p>
    </>
  );
}

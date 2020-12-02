import React from "react";
import Paper from "@material-ui/core/Paper";

export default function WeatherCard(props) {
  const { valid_date, weather, max_temp, min_temp, uv } = props;

  return (
    <Paper variant="outlined">
      <div>Weather Card component</div>
      <p>{valid_date}</p>
      <p>{weather.description}</p>
      <p>{max_temp}</p>
      <p>{min_temp}</p>
      <p>{uv}</p>
    </Paper>
  );
}

import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { ConvertToFahrenheit } from "../../utils/utils";
import "./CurrentLocationCardStyles.css";

export default function CurrentLocationCard() {
  // check for lat or long in context and then get current weather

  const appContext = useContext(AppContext);
  console.log("current location context is ", appContext);

  if (!appContext.currentWeather) {
    return <h1>No weather data for current location yet</h1>;
  }

  const { metric } = appContext;

  const { city_name, datetime, app_temp, weather } = appContext.currentWeather;

  const { description } = weather;

  const temp = metric
    ? app_temp + " °C"
    : ConvertToFahrenheit(app_temp) + " °F";

  return (
    <>
      <h1>{city_name}</h1>
      <p>{datetime}</p>
      <p>{temp}</p>
      <p>{description}</p>
    </>
  );
}

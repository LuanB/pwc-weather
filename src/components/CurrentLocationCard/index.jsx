import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import "./CurrentLocationCardStyles.css";

export default function CurrentLocationCard() {
  // check for lat or long in context and then get current weather

  const appContext = useContext(AppContext);
  console.log("current location context is ", appContext);

  if (!appContext.currentWeather) {
    return <h1>No weather data for current location yet</h1>;
  }

  const { city_name, datetime, app_temp, weather } = appContext.currentWeather;

  const { description } = weather;

  return (
    <>
      <div> Current Location Weather Card component</div>
      <h1>{city_name}</h1>
      <p>{datetime}</p>
      <p>{app_temp}</p>
      <p>{description}</p>
    </>
  );
}

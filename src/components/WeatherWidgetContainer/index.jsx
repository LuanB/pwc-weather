import React, { useEffect } from "react";
import useGeolocation from "react-hook-geolocation";

import "./WeatherWidgetContainerStyles.css";

export default function WeatherWidgetContainer() {
  const geolocation = useGeolocation();

  console.log(geolocation);
  return (
    <>
      <div>weather widget container</div>
      <div>location is {geolocation.latitude}</div>
    </>
  );
}

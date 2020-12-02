import React, { useEffect, useContext } from "react";
import useGeolocation from "react-hook-geolocation";
import { DispatchContext } from "../../context/appContext";

import "./WeatherWidgetContainerStyles.css";

export default function WeatherWidgetContainer() {
  setTimeout(() => {
    getLocation();
  }, 1000);

  const dispatch = useContext(DispatchContext);

  // dispatch({ type: "SetGeoData", payload: geolocation });

  // console.log(geolocation);

  const getLocation = async () => {
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch({ type: "error", payload: position });
        console.log(position);
      },
      (error) => {
        dispatch({ type: "error" });
      }
    );

    return;
  };

  return (
    <>
      <div>weather widget container</div>
      {/* <div>location is {geolocation.latitude}</div> */}
    </>
  );
}

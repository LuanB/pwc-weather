import React, { useEffect, useContext } from "react";

import WeatherCard from "../WeatherCard";
import CurrentLocationCard from "../CurrentLocationCard";
import { DispatchContext } from "../../context/appContext";
import "./WeatherWidgetContainerStyles.css";

export default function WeatherWidgetContainer() {
  useEffect(() => {
    setTimeout(() => {
      getLocation();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useContext(DispatchContext);

  const getLocation = async () => {
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch({ type: "SetGeoData", payload: position });
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
      <CurrentLocationCard />
      <WeatherCard />
    </>
  );
}

import React, { useEffect, useContext } from "react";

import WeatherCard from "../WeatherCard";
import CurrentLocationCard from "../CurrentLocationCard";
import { AppContext, DispatchContext } from "../../context/appContext";
import "./WeatherWidgetContainerStyles.css";
import apiKeys from "../../utils/apiKeys";
import { useFetch } from "../../hooks/useFetch";

export default function WeatherWidgetContainer() {
  // We get the location of the user. then set this data into context.
  // we then set the lat long into context so that child components can work off it.

  useEffect(() => {
    setTimeout(() => {
      getLocation();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatch = useContext(DispatchContext);

  const appContext = useContext(AppContext);

  const getLocation = async () => {
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch({ type: "SetGeoData", payload: position });
        dispatch({
          type: "SetLatLong",
          payload: {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          },
        });
        console.log(position);
        GetCurrentLocationWeather();
      },
      (error) => {
        dispatch({ type: "error" });
      }
    );

    return;
  };

  const GetCurrentLocationWeather = async () => {
    const res = await fetch(
      `${apiKeys.base}current?key=${apiKeys.key}&lat=${appContext.lat}&lon=${appContext.long}`
    );
    const json = await res.json();

    const { data } = json;

    // save to context for potential deep child consumer components.
    console.log("data is", data[0]);
    dispatch({ type: "SetCurrentWeather", payload: data[0] });
  };

  return (
    <>
      <div>weather widget container</div>
      <CurrentLocationCard />
      <WeatherCard />
    </>
  );
}

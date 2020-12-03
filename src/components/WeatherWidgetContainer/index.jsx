import React, { useEffect, useContext } from "react";

import CurrentLocationCard from "../CurrentLocationCard";
import { AppContext, DispatchContext } from "../../context/appContext";
import "./WeatherWidgetContainerStyles.css";
import apiKeys from "../../utils/apiKeys";
import axios from "axios";
import WeatherCardContainer from "../WeatherCardContainer";

import { mockCurrentWeather, mockForecastData } from "../../utils/utils";
import HumidityDataCard from "../HumidityDataCard";
import SearchContainer from "../SearchContainer";

export default function WeatherWidgetContainer() {
  // We get the location of the user. then set this data into context.
  // we then set the lat long into context so that child components can work off it.
  const dispatch = useContext(DispatchContext);

  const appContext = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      getLocation();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // watch for lat data changing and then reload the new weather data for the new lat / long
  useEffect(() => {
    console.log("++++++++ lat changed ", appContext.lat);
    if (appContext.lat) {
      SetCurrentLocationWeather(appContext.lat, appContext.long);
      SetForcastWeather(appContext.lat, appContext.long);
    }
  }, [appContext.lat]);

  // watch for city changes if the user searches a new city then update lat long

  useEffect(() => {
    if (appContext.city) {
      SetLatLongForCity(appContext.city);
    }
  }, [appContext.city]);

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

        console.log("context in get location is ", appContext);
      },
      (error) => {
        dispatch({ type: "error" });
      }
    );

    return;
  };

  const SetCurrentLocationWeather = async (lat, long) => {
    try {
      console.log("context in Get current location weather is ", appContext);
      const data = await axios(
        `${apiKeys.base}current?key=${apiKeys.key}&lat=${lat}&lon=${long}`
      );

      dispatch({ type: "SetCurrentWeather", payload: data.data.data[0] });
      // dispatch({ type: "SetCurrentWeather", payload: mockCurrentWeather });
    } catch (error) {
      console.log(error);
    }
  };

  const SetForcastWeather = async (lat, long) => {
    try {
      const data = await axios(
        `${apiKeys.base}forecast/daily?key=${apiKeys.key}&lat=${lat}&lon=${long}&days=7`
      );

      dispatch({ type: "SetForecastWeatherData", payload: data.data.data });
      // dispatch({ type: "SetForecastWeatherData", payload: mockForecastData });
    } catch (error) {
      console.log(error);
    }
  };

  const SetLatLongForCity = async (city) => {
    try {
      const data = await axios(
        `${apiKeys.base}current?city=${city}&country=au&key=${apiKeys.key}`
      );
      dispatch({
        type: "SetLatLong",
        payload: {
          lat: data.data.data[0].lat,
          long: data.data.data[0].lon,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="WidgetContainer">
      <div className="CurrentWeatherCard SideWeather">
        <CurrentLocationCard />
      </div>
      <div className="Humidity">
        <HumidityDataCard />
      </div>
      <div className="Search">
        <SearchContainer />
      </div>
      <div className="WeatherCard">
        <WeatherCardContainer />
      </div>
    </div>
  );
}

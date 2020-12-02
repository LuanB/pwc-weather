import React, { useEffect, useState, useContext } from "react";
import GridList from "@material-ui/core/GridList";
import { makeStyles } from "@material-ui/core/styles";
import GridListTile from "@material-ui/core/GridListTile";
import { AppContext } from "../../context/appContext";
import WeatherCard from "../WeatherCard";
import "./WeatherCardContainerStyles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

export default function WeatherCardContainer() {
  const appContext = useContext(AppContext);

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (appContext.forecastWeatherData) {
      setWeatherData(appContext.forecastWeatherData);
    }
  }, [appContext.forecastWeatherData]);

  const classes = useStyles();

  return (
    <>
      <div>Weather Card Container</div>

      {weatherData ? (
        <GridList className={classes.gridList} cols={2.5}>
          {weatherData.map((weather, key) => (
            <GridListTile key={key}>
              <WeatherCard
                key={key}
                date={weather.valid_date}
                weather={weather.weather}
                max_temp={weather.max_temp}
                min_temp={weather.min_temp}
                uv={weather.uv}
              />
            </GridListTile>
          ))}
        </GridList>
      ) : (
        <div>no data yet</div>
      )}
    </>
  );
}

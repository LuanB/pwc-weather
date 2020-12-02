const reducer = (state, action) => {
  switch (action.type) {
    case "SetGeoData":
      return {
        ...state,
        geoData: action.payload,
      };

    case "SetCurrentWeather":
      return {
        ...state,
        currentWeather: action.payload,
      };

    case "SetForecastWeatherData":
      return {
        ...state,
        forecastWeatherData: action.payload,
      };

    case "SetCity":
      return {
        ...state,
        city: action.payload,
      };

    case "Loading":
      return {
        ...state,
        isLoading: true,
      };

    case "ZeroLatLong":
      return {
        ...state,
        lat: null,
        long: null,
      };

    case "SetLatLong":
      return {
        ...state,
        lat: action.payload.lat,
        long: action.payload.long,
      };

    case "SetMetric":
      return {
        ...state,
        metric: action.payload,
      };

    case "Error":
      return {
        ...state,
        error: "App error state",
        isLoading: false,
      };

    default:
      return state;
  }
};
export default reducer;

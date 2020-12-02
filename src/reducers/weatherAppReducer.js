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

    case "SetWeatherData":
      return {
        ...state,
        weatherData: action.payload,
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

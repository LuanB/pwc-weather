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

    case "loading":
      return {
        ...state,
        isLoading: true,
      };

    case "zeroLatLong":
      return {
        ...state,
        lat: null,
        long: null,
      };

    case "setLatLong":
      return {
        ...state,
        lat: action.payload.lat,
        long: action.payload.long,
      };

    case "error":
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

const reducer = (state, action) => {
  switch (action.type) {
    case "SetGeoData":
      return {
        ...state,
        // geoData: action.payload,
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

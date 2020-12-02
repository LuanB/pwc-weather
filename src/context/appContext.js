import React, { createContext, useReducer } from "react";
import weatherAppReducer from "../reducers/weatherAppReducer";

const initialState = {
  forecastWeatherData: null,
  isLoading: false,
  error: "",
  geoData: null,
  lat: null,
  long: null,
};

export const AppContext = createContext();
export const DispatchContext = createContext();

export function AppContextProvider(props) {
  const [appContext, dispatch] = useReducer(weatherAppReducer, initialState);

  return (
    <AppContext.Provider value={appContext}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </AppContext.Provider>
  );
}

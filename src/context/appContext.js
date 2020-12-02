import React, { createContext, useState } from "react";
import weatherAppReducer from "../reducers/weatherAppReducer";

const initialState = {
  weatherData: [],
  isLoading: false,
  error: "",
  geoData: null,
};

export const AppContext = createContext();
export const DispatchContext = createContext();

export function AppContextProvider(props) {
  const [appContext, dispatch] = useState(initialState, weatherAppReducer);
  return (
    <AppContext.Provider value={appContext}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </AppContext.Provider>
  );
}

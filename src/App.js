import React from "react";
import WeatherWidgetContainer from "./components/WeatherWidgetContainer";
import { AppContextProvider } from "./context/appContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <WeatherWidgetContainer />
      </AppContextProvider>
    </div>
  );
}

export default App;

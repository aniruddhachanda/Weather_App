import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { TheamProvider } from "./context/theme.context";
import { WeatherProvider } from "./context/weather.context";

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TheamProvider>
      <WeatherProvider>
        <App/>
      </WeatherProvider>
    </TheamProvider>
  </React.StrictMode>
);
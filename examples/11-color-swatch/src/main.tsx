import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RGBContextProvider } from "./context";
import "./index.css";
import { defaultTheme, ThemeContext } from "./ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContext.Provider value={defaultTheme}>
      <RGBContextProvider>
        <App />
      </RGBContextProvider>
    </ThemeContext.Provider>
  </React.StrictMode>
);

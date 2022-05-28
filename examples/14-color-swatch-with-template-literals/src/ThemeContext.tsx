import React, { createContext } from "react";

type Themes = {
  [key: string]: React.CSSProperties;
};

export const defaultTheme: Themes = {
  light: {
    backgroundColor: "white",
    color: "black",
  },
  dark: {
    backgroundColor: "#555",
    color: "white",
  },
};
export const ThemeContext = createContext(defaultTheme);

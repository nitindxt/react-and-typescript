import * as React from "react";

import { ColorSwatch } from "./ColorSwatch";
import { ThemeContext } from "./ThemeContext";
import { ColorAdjustment } from "./ColorAdjustment";
import { ColorSlider } from "./ColorSlider";
import { ColorInput } from "./ColorInput";

const App = () => {
  const themes = React.useContext(ThemeContext);
  return (
    <main style={{ ...themes.dark }}>
      <ColorSwatch />
      <ColorAdjustment Adjustment={ColorInput}></ColorAdjustment>
      <ColorAdjustment Adjustment={ColorSlider}></ColorAdjustment>
    </main>
  );
};

export default App;

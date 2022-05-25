import * as React from "react";

import { ColorSwatch } from "./ColorSwatch";
import { ColorInputs } from "./ColorInputs";
import { ColorSliders } from "./ColorSliders";

import { toRGB } from "./utilities";
import { reducer } from "./reducer";
import { ThemeContext } from "./ThemeContext";
import { ColorAdjustment } from "./ColorAdjustment";
import { ColorSlider } from "./ColorSlider";
import { ColorInput } from "./ColorInput";

const App = () => {
  const themes = React.useContext(ThemeContext);
  return (
    <main style={{ ...themes.dark }}>
      <ColorSwatch />
      <ColorAdjustment AdjustComponent={ColorInput}></ColorAdjustment>
      <ColorAdjustment AdjustComponent={ColorSlider}></ColorAdjustment>
    </main>
  );
};

export default App;

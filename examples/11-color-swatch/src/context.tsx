import { createContext, Dispatch, useReducer } from "react";
import { AdjustmentAction, reducer } from "./reducer";
import { RGBColorType } from "./types";

interface RGBContextType extends RGBColorType {
  dispatch: Dispatch<AdjustmentAction>;
}

export const RGBContext = createContext<RGBContextType>({} as RGBContextType);

export const RGBContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [rgb, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <RGBContext.Provider value={{ ...rgb, dispatch }}>
      {children}
    </RGBContext.Provider>
  );
};

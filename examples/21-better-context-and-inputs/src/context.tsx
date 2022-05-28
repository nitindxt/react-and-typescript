import { Dispatch, useReducer } from "react";
import { AdjustmentAction, reducer } from "./reducer";
import { RGBColorType } from "./types";
import { createContext } from "./create-context";

interface RGBContextType extends RGBColorType {
  dispatch: Dispatch<AdjustmentAction>;
}

export const [useContext, Provider] = createContext<RGBContextType>();

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
    <Provider
      value={{
        ...rgb,
        dispatch,
      }}
    >
      {children}
    </Provider>
  );
};

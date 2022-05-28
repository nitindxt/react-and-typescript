import * as React from "react";

export function createContext<A extends {} | null>() {
  const context = React.createContext<A | undefined>(undefined);

  const useContext = () => {
    const c = React.useContext(context);
    if (c === undefined)
      throw new Error("useContext must be inside a Provider with a value");
    return c;
  };
  return [useContext, context.Provider] as const;
}
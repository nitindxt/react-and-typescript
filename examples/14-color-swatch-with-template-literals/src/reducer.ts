import { RGBColorType } from "./types";

const colors = ["red", "green", "blue"] as const; //or const colors: readonly ["red", "green", "blue"] in ts
type Colors = Uppercase<typeof colors[number]>;

export type AdjustmentAction = {
  type: `ADJUST_${Colors}`;
  payload: number;
};

export const reducer = (
  state: RGBColorType,
  action: AdjustmentAction
): RGBColorType => {
  for (const color of colors) {
    if (action.type === `ADJUST_${color.toUpperCase()}`) {
      return { ...state, [color]: action.payload };
    }
  }

  return state;
};

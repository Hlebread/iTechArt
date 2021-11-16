import { createActionCreator } from "deox";

export const setUnitsAction = createActionCreator(
  "SET_UNITS",
  (resolve) => (text: string) => resolve(text)
);

import { createReducer } from "deox";
import { setUnitsAction } from "../actions/settings";

const defaultState = {
  units: "celsius",
};

export const settingsReducer = createReducer(defaultState, (handleAction) => [
  handleAction(setUnitsAction, (state, { payload }) => ({
    ...state,
    units: payload,
  })),
]);

import { createReducer } from "deox";
import { setCurrentWeatherAction, setForecastAction } from "../actions/weather";

const defaultState = {
  current: {},
  forecast: [],
};

export const weatherReducer = createReducer(defaultState, (handleAction) => [
  handleAction(setCurrentWeatherAction, (state, { payload }: any) => ({
    ...state,
    current: { ...payload },
  })),
  handleAction(setForecastAction, (state, { payload }: any) => ({
    ...state,
    forecast: payload,
  })),
]);

import { createActionCreator } from "deox";

export const setCurrentWeatherAction = createActionCreator(
  "SET_CURRENT_WEATHER",
  (resolve) => (weather: any) => resolve(weather)
);

export const setForecastAction = createActionCreator(
  "SET_FORECAST",
  (resolve) => (weather: any) => resolve(weather)
);

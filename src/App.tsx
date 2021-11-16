import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setCurrentWeatherAction,
  setForecastAction,
} from "./store/actions/weather";

import OpenWeather from "./api/OpenWeather";
import AppRouter from "./routes/AppRouter/AppRouter";

const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => getWeather(pos),
      () => getWeather()
    );

    const getWeather = async (pos?: any) => {
      const weather = await OpenWeather.get(pos);
      dispatch(setCurrentWeatherAction(weather.current));
      dispatch(setForecastAction(weather.daily));
    };
  }, []);

  return <AppRouter />;
};

export default App;

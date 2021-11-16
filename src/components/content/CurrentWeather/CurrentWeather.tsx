import React, { FC } from "react";

import cl from "./CurrentWeather.module.scss";

import CWTitle from "./components/CWTitle/CWTitle";
import CWMain from "./components/CWMain/CWMain";
import CWDescription from "./components/CWDescription/CWDescription";
import { useAppSelector } from "../../../store";

const CurrentWeather: FC = () => {
  const weather = useAppSelector((state) => state.weather.current);
  return (
    <div className={cl.component}>
      <CWTitle location={weather.city} updated={weather.updated} />
      <CWMain weather={weather} />
      <CWDescription
        humidity={weather.humidity}
        windSpeed={weather.wind_speed}
        pressure={weather.pressure}
      />
    </div>
  );
};

export default CurrentWeather;

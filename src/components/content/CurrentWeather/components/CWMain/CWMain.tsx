import React, { FC } from "react";

import cl from "./CWMain.module.scss";
import cl_basic from "../../CurrentWeather.module.scss";

const CWMain: FC<{ weather: any }> = ({ weather }) => {
  const temperature = Math.round(weather.temp || 0);
  const feelsLike = Math.round(weather.feels_like || 0);
  const icon = `http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`;

  return (
    <div className={cl.component}>
      <div className={cl.temperature}>{temperature}&deg;</div>
      <img src={icon} alt="Weather icon" className={cl.icon} />
      <div className={cl.details}>
        <div>{weather.weather?.[0].main}</div>
        <div>
          <span className={cl_basic.secInfo}>Feels like: </span>
          {feelsLike}
          &deg;
        </div>
      </div>
    </div>
  );
};

export default CWMain;

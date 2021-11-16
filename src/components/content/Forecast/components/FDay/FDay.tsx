import React, { FC, useState } from "react";
import classNames from "classnames/bind";

import cl from "./FDay.module.scss";

const cx = classNames.bind(cl);

const FDay: FC<{
  date: { date: number; month: string; dayName: string };
  weather: any;
}> = ({ date, weather, children }) => {
  const [active, setActive] = useState(false);
  const clickHandler = () => setActive((prevValue) => !prevValue);

  const temperatureDay = Math.round(weather.temp.day || 0);
  const temperatureNight = Math.round(weather.temp.night || 0);
  const icon = `http://openweathermap.org/img/wn/${weather.weather?.[0].icon}.png`;
  
  return (
    <li
      className={cx({
        component: true,
        component_active: active,
      })}
      onClick={clickHandler}
    >
      <div className={cl.preview}>
        <div className={cl.date}>
          <div className={cl.weekDay}>{date.dayName}</div>
          <div>
            {date.month}, {date.date}
          </div>
        </div>
        <img src={icon} alt="Weather icon" className={cl.icon} />
        <div className={cl.temp}>
          {temperatureDay}&deg;/{temperatureNight}&deg;
        </div>
      </div>
      <div className={cl.moreInfo}>More info</div>
    </li>
  );
};

export default FDay;

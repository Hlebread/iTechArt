import React, { FC } from "react";
import { useAppSelector } from "../../../store";

import cl from "./Forecast.module.scss";
import { daysOfWeek, months } from "./assets/Names";

import FDay from "./components/FDay/FDay";

const Forecast: FC = () => {
  const weather = useAppSelector((state) => state.weather.forecast);
  const currentDate = new Date();
  return (
    <div className={cl.component}>
      <ul className={cl.list}>
        {weather.map((day: any, index: number) => {
          const dt = new Date(day?.dt * 1000);
          const dtDate = dt.getDate();
          const dtDay = dt.getDay() - 1;
          const dayName =
            dtDate === currentDate.getDate()
              ? "Today"
              : daysOfWeek[dtDay < 0 ? 6 : dtDay];
          const month = months[dt.getMonth()];
          return (
            <FDay
              key={index}
              date={{ dayName, month, date: dtDate }}
              weather={day}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Forecast;

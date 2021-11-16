import React, { FC, useEffect } from "react";

import cl from "./AppContent.module.scss";

import Chart from "../Chart/Chart";

import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Forecast from "../Forecast/Forecast";

const AppContent: FC = () => {
  useEffect(() => {
    document.title = "Dashboard";
  });
  return (
    <main className={cl.component}>
      <CurrentWeather />
      <Forecast />
      <Chart />
    </main>
  );
};

export default AppContent;

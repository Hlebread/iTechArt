import React, { FC } from "react";
import classNames from "classnames";

import cl from "./CWTitle.module.scss";
import cl_basic from "../../CurrentWeather.module.scss";

const CWTitle: FC<{ location: string; updated: Date }> = ({
  location,
  updated,
}) => {
  const toSimilar = (value: number) => (value < 10 ? `0${value}` : value);
  const updateHour = updated?.getHours() || 0;
  const updatedMin = updated?.getMinutes() || 0;
  const updateTime = `${toSimilar(updateHour)}.${toSimilar(updatedMin)}`;

  return (
    <h4 className={classNames(cl.component, cl_basic.secInfo)}>
      <div>{location}</div>
      <div>Updated: {updateTime}</div>
    </h4>
  );
};

export default CWTitle;

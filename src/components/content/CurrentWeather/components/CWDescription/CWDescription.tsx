import React, { FC } from "react";
import { FiWind, FiDroplet } from "react-icons/fi";
import { MdSpeed } from "react-icons/md";

import cl from "./CWDescription.module.scss";

const CWDescription: FC<{
  humidity: number;
  windSpeed: number;
  pressure: number;
}> = ({ humidity, windSpeed, pressure }) => {
  const descItems = [
    {
      icon: <FiWind className={cl.icon} />,
      content: `${windSpeed || 0} m/s`,
    },
    {
      icon: <FiDroplet className={cl.icon} />,
      content: `${humidity || 0}%`,
    },
    {
      icon: <MdSpeed className={cl.icon} />,
      content: `${pressure || 0} hPa`,
    },
  ];

  return (
    <div className={cl.component}>
      {descItems.map((item, index) => (
        <span className={cl.container} key={index}>
          {item.icon}
          {item.content}
        </span>
      ))}
    </div>
  );
};

export default CWDescription;

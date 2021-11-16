import React, { FC } from "react";
import classNames from "classnames/bind";

import { IActive } from "../../../types/common";

import cl from "./AppPreloader.module.scss";

const cx = classNames.bind(cl);
const arcs = [1, 2, 3, 4, 5];

const AppPreloaderArcs: FC = () => {
  return (
    <>
      {arcs.map((num) => (
        <div className={cl.lineWrapper} key={num}>
          <div className={cl.line}></div>
        </div>
      ))}
    </>
  );
};

interface IAppPreloader extends IActive {}

const AppPreloader: FC<IAppPreloader> = ({ active }) => (
  <div className={cx({ component: true, component_active: active })}>
    <div className={cl.container}>
      <AppPreloaderArcs />
    </div>
    <div className={cl.text}>looking outside...</div>
  </div>
);

export default AppPreloader;

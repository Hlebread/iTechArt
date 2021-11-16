import React, { FC } from "react";
import cl from "./AppWrapper.module.scss";

const AppWrapper: FC = ({ children }) => (
  <div className={cl.component}>{children}</div>
);

export default AppWrapper;

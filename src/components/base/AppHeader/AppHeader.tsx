import React, { FC } from "react";
import { IoMenuOutline } from "react-icons/io5";

import cl from "./AppHeader.module.scss";

import UnitsToggle from "./components/UnitsToggle/UnitsToggle";

interface IAppHeader {
  toggleNavbar: () => void;
}

const AppHeader: FC<IAppHeader> = ({ toggleNavbar }) => (
  <header className={cl.component}>
    <div className={cl.burger} onClick={toggleNavbar}>
      <IoMenuOutline />
    </div>

    <div className={cl.container}>
      <UnitsToggle />
    </div>
  </header>
);

export default AppHeader;

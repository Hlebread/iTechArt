import React, { FC, ReactChild, ReactNode } from "react";
import { useAppSelector } from "../../../store";
import classNames from "classnames/bind";

import { IActive } from "../../../types/common";

import cl from "./Navbar.module.scss";

import NUser from "./components/NUser/NUser";
import NFooter from "./components/NFooter/NFooter";
import NList from "./components/NList/NList";
import NSignIn from "./components/NSignIn/NSignIn";

const cx = classNames.bind(cl);

export interface INavbar extends IActive {
  name?: string;
  link?: string;
  icon?: ReactNode | ReactChild;
}

const Navbar: FC<INavbar> = ({ active }) => {
  const auth = useAppSelector((state) => state.auth.auth);
  return (
    <nav
      className={cx({
        component: true,
        component_active: active,
      })}
    >
      {auth ? <NUser /> : <NSignIn />}
      <NList />
      {auth ? <NFooter /> : ""}
    </nav>
  );
};

export default Navbar;

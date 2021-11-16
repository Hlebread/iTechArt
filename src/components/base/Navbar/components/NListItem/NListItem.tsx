import React, { FC } from "react";
import classNames from "classnames/bind";

import { INavbar } from "../../Navbar";

import cl from "./NListItem.module.scss";
import cl_basic from "../../Navbar.module.scss";

import { NavLink } from "react-router-dom";

const cx = classNames.bind(cl);

const NListItem: FC<INavbar> = ({ name, link, icon }) => (
  <li className={cl.component}>
    <NavLink
      to={link || "/"}
      className={(isActive) =>
        cx({ link: true, link_active: isActive }, cl_basic.link)
      }
    >
      <span className={cl_basic.icon}>{icon}</span>
      <span>{name}</span>
    </NavLink>
  </li>
);

export default NListItem;

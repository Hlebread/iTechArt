import React, { FC } from "react";
import { AiOutlineCloud } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

import cl from "./NList.module.scss";

import NListItem from "../NListItem/NListItem";

const menuItems = [
  { name: "Dashboard", link: "/dashboard", icon: <AiOutlineCloud /> },
  { name: "Settings", link: "/settings", icon: <IoSettingsOutline /> },
];

const NList: FC = () => (
  <ul className={cl.component}>
    {menuItems.map((item, index) => (
      <NListItem
        name={item.name}
        link={item.link}
        icon={item.icon}
        key={index}
      />
    ))}
  </ul>
);

export default NList;

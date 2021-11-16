import React, { FC } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { userLogoutAction } from "../../../../../store/actions/auth";
import { IoLogOutOutline } from "react-icons/io5";

import cl from "./NFooter.module.scss";
import cl_basic from "../../Navbar.module.scss";

const NFooter: FC = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(userLogoutAction());
  };

  return (
    <div className={classNames(cl.component, cl_basic.link)} onClick={logOut}>
      <span className={cl_basic.icon}>
        <IoLogOutOutline />
      </span>
      <span>Log out</span>
    </div>
  );
};

export default NFooter;

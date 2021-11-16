import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../../../../../store/actions/auth";

import classNames from "classnames";
import { IoPerson, IoChevronForwardOutline } from "react-icons/io5";

import cl from "./NSignIn.module.scss";
import cl_basic from "../../Navbar.module.scss";

const NSignIn: FC = () => {
  const dispatch = useDispatch();
  const logIn = () => {
    dispatch(userLoginAction());
  };

  return (
    <div className={classNames(cl.component, cl_basic.link)} onClick={logIn}>
      <span className={classNames(cl.icon, cl_basic.icon)}>
        <IoPerson />
      </span>
      <span className={cl.content}>
        Sign In
        <IoChevronForwardOutline />
      </span>
    </div>
  );
};

export default NSignIn;

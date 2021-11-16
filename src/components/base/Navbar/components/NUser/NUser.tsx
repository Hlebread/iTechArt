import React, { FC } from "react";
import classNames from "classnames";

import cl from "./NUser.module.scss";
import cl_basic from "../../Navbar.module.scss";

const NUser: FC = () => (
  <div className={classNames(cl.component, cl_basic.link)}>
    <img
      src="https://images.iphonephotographyschool.com/28251/1120/Best-Photo-Editing-Apps.jpg"
      alt=""
      className={cl.avatar}
    />
    <span className={cl.text}>Hlebread</span>
  </div>
);

export default NUser;

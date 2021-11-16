import React, { FC, useState } from "react";

import "../../styles/general.scss";

import AppHeader from "../../components/base/AppHeader/AppHeader";
import AppPreloader from "../../components/base/AppPreloader/AppPreloader";
import AppWrapper from "../../components/base/AppWrapper/AppWrapper";
import Navbar from "../../components/base/Navbar/Navbar";

const GeneralLayout: FC = ({ children }) => {
  const [navbarIsActive, setNavbarIsActive] = useState(false);

  const toggleNavbar = () => setNavbarIsActive((prevValue) => !prevValue);

  return (
    <AppWrapper>
      <AppPreloader active={false} />
      <Navbar active={navbarIsActive} />
      <AppHeader toggleNavbar={toggleNavbar} />
      {children}
    </AppWrapper>
  );
};

export default GeneralLayout;

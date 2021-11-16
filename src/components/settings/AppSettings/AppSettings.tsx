import React, { FC, useEffect } from "react";
import "./AppSettings.scss";

const AppSettings: FC = () => {
  useEffect(() => {
    document.title = "Settings";
  });
  
  return (
    <main className="appSettings">
      <div className="appSettings__block">User settings</div>
      <div className="appSettings__block">Settings</div>
      <div className="appSettings__block">Settings</div>
    </main>
  );
};

export default AppSettings;

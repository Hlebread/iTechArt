import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router";

import AppContent from "../../components/content/AppContent/AppContent";
import AppSettings from "../../components/settings/AppSettings/AppSettings";

const AppRouter: FC = () => {
  return (
    <Switch>
      <Route path="/dashboard" component={AppContent} />
      <Route path="/settings" component={AppSettings} />
      <Redirect to="/dashboard" />
    </Switch>
  );
};

export default AppRouter;

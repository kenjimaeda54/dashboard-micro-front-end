import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { Pricing } from "../pages/pricing";
import { LandingPage } from "../pages/landing-page";

export const RoutesApp = () => {
  return (
    <Switch>
      <Route path="/pricing" component={Pricing} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
};

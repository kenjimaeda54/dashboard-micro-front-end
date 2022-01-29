import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { Pricing } from "../pages/pricing";
import { LandingPage } from "../pages/landing-page";

export const RoutesApp = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/pricing" component={Pricing} />
      </Switch>
    </Router>
  );
};

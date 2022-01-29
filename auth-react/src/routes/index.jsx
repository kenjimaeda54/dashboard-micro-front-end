import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { SignUp } from "../pages/sign-up";
import { Sign } from "../pages/sign";

export const RoutesApp = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/auth/sign" component={Sign} />
        <Route path="/auth/signup" component={SignUp} />
      </Switch>
    </Router>
  );
};

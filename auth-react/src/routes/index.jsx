import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { SignUp } from "../pages/sign-up";
import { SignIn } from "../pages/sign";

export const RoutesApp = () => {
  return (
    <Switch>
      <Route path="/auth/signin" component={SignIn} />
      <Route path="/auth/signup" component={SignUp} />
    </Switch>
  );
};

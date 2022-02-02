import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { SignUp } from "../pages/sign-up";
import { SignIn } from "../pages/sign";
//
export const RoutesApp = ({ onSingIn }) => {
  return (
    <Switch>
      <Route path="/auth/signin">
        <SignIn onSingIn={onSingIn} />
      </Route>
      <Route path="/auth/signup">
        <SignUp onSingIn={onSingIn} />
      </Route>
    </Switch>
  );
};

import React, { StrictMode } from "react";
import { useLocation, Router } from "react-router-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import App from "./app";

const mount = (element, { onNavigate, defaultHistory, initialPathName }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPathName],
    });
  console.log("no marketing", initialPathName);
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    element
  );
  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const root = document.getElementById("rootMarketing");
  if (root) {
    mount(root, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };

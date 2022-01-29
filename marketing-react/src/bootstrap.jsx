import React, { StrictMode } from "react";
import { useLocation } from "react-router-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import App from "./app";

const mount = (element, { onNavigate, defaultHistory, initialPathName }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPathName],
    });
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, element);
  return {
    onParentNavigate: ({ pathname }) => {
      history.push(pathname);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const root = document.getElementById("root");
  if (root) {
    mount(root, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };

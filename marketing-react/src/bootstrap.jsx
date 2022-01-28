import React, { StrictMode } from "react";
import { useLocation } from "react-router-dom";
import { createMemoryHistory } from "history";
import ReactDOM from "react-dom";
import App from "./app";

const mount = (element, { onNavigate }) => {
  const history = createMemoryHistory();
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
    mount(root, {});
  }
}

export { mount };

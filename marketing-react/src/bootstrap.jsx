import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./app";

const mount = (element) => {
  ReactDOM.render(<App />, element);
};

if (process.env.NODE_ENV === "development") {
  const root = document.getElementById("root");
  if (root) {
    mount(root);
  }
}

export { mount };

import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./app";

const mount = (element) => {
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    element
  );
};

if (process.env.NODE_ENV === "development") {
  const root = document.getElementById("root");
  if (root) {
    mount(root);
  }
}

export { mount };

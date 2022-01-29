import React, { StrictMode } from "react";
import { useLocation } from "react-router-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import App from "./app";

const mount = (element, { onNavigate, defaultHistory, initialPathName }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      //esse initialEntries é para que o app inicie com a pagina que esta na url
      //memory nao tem o histórico. Nosso container as rotas e em browser router,entao assim faco que ambos fiquem na mesma url
      //se nao poderia acontecer de ir para uma url vazia
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
  const root = document.getElementById("rootAuth");
  if (root) {
    mount(root, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };

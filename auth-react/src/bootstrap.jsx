import React, { StrictMode } from "react";
import { useLocation, Router } from "react-router-dom";
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
  console.log("no auth", initialPathName);
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
      //esta e melhor forma debugar a acao do pai com o filho
      //no pai enxergo as mudanças no filho da url por aqui
      console.log("rota atual do auth", pathname);
      console.log("estou do container", nextPathname);
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
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

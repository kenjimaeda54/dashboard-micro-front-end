import React, { StrictMode } from "react";
import { useLocation, Router } from "react-router-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import App from "./app";

//
const mount = (
  element,
  { onNavigate, onSingIn, defaultHistory, initialPathName }
) => {
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

  ReactDOM.render(
    <Router history={history}>
      <App onSingIn={onSingIn} />
    </Router>,
    element
  );
  return {
    initialPathName,
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = history.location;
      //esta e melhor forma debugar a acao do pai com o filho
      //no pai enxergo as mudanças no filho da url por aqui
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
      return nextPathname;
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#rootAuth");
  if (root) {
    mount(root, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };

# Dashboard micro front end
Aplicacao simples com dashboard,landing page.</br>
Arquitetura usando micro front end com module Federation Plugin, React e Vue

## Motivacao
Praticar conceitos de micro front end e CI/CD </br>
[Dashboard](https://d2bfxzyow9zlxo.cloudfront.net/)

## Feature
- Para isolar aplicação dos entre as app usei mesma abordagem que neste [repositório](https://github.com/kenjimaeda54/ecommerce-micro-front-end)
- Diferença se da pelas tecnologias usasdas, React usa o React.Dom, Vue utiliza o app.create
- Para consumir  os app   usei no contêiner tecnologia React, motivo que facilita,por que tem o useRef e React Router Dom
- Useref é um hook que permite acessar diretamente arvore dom, assim fica simples injetar o html dos filhos


``` javascript

//react 

import React, { StrictMode } from "react";
import { useLocation, Router } from "react-router-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import App from "./app";

const mount = (element){

  ReactDOM.render(
    <Router history={history}>
      <App onSingIn={onSingIn} />
    </Router>,
    element
  );
};

if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#rootAuth");
  if (root) {
    mount(root, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };

//vue 

import { createApp } from "vue";
import Dashboard from "./pages/Dashboard.vue";

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#dashboard-root-vue");
  if (root) {
    mount(root);
  }
}

export { mount };

// container pai

import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};




```




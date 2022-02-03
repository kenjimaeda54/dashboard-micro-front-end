# Dashboard micro front end
Aplicacao simples com dashboard,landing page.</br>
Arquitetura usando micro front end com module Federation Plugin, React e Vue

## Motivacao
Praticar conceitos de micro front end e CI/CD </br>
[Dashboard](https://d2bfxzyow9zlxo.cloudfront.net/), saite rodando no CloudFront(aws)

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

##

- Na navegação abusei dos history,  com memoryHistory consigo acessar as rotas na memória e não no Broswer
- Motivo dessa abordagem, aplicativo filho esta na rota '/', enquanto aplicativo pai está em '/'. Se ambos fossem  BroswerRouter, poderia gerar problemas na navegação
- CreateMemoryHistory não atualiza o broswer assim fica fácil implementar navegação
- Para memory history entender suas rotas utilizei o recurso initialEntries, assim consigo sinalizar a rota conforme o filho
- Exemplo dessa abordagem estou no pai em /auth/signin, no filho com initialEntries, a sua rota inicial vai ser /auth/signing, assim ele vai verificar no arquivo de rotas se existe esse match, no caso existe, então  renderizar o componente correspondente.
- Os aplicativos filhos ficam isolados do aplicativo pai, auth tem as rotas. /auth/signin e /auth/signup. Essas rotas na é conhecido por quem consume,  apenas através do link (react router dom), redireciona para a rota, mas dentro do seu  app não existe nenhuma relação, com as rotas dos filhos
- Outra técnica interessante para o container entender a rota atual que o filho esta e usar retorno da função do filho um função com o retorno da rota.
- onParentNavigate e uma função que vai referenciar aonde este o filho para o browser, os aplicativos filhos possuem duas rotas, preciso que no broswer seja refletido visualmente rotas, com onParenteNavigate eu consigo fazer isso
- Para navegar entre os filhos houve um bug em desenvolvi mento, para corrigir isso usei o window.location.pathname, mas em produção funcionou apenas com os componentes do react router dom, inclusive precise rei retirar essa abordagem porque não renderizou no aws o aplicativo quando navegava entre as rotas


``` javascript
//filho auth

import React, { StrictMode } from "react";
import { useLocation, Router } from "react-router-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import App from "./app";

const mount = (
  element,
  { onNavigate, onSingIn, defaultHistory, initialPathName }
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({ initialEntries: [initialPathName],});

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


// container pai
import { mount } from 'auth/AuthApp';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export default () => {
  const ref = useRef(null);
  const history = useHistory();
  const { onSingIn } = useAuth();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPathName: history.location.pathname,
      onNavigate: ({ pathname: route }) => {
        const { pathname } = history.location;
        if (pathname !== route) {
          history.push(route);
        }
      },
      //aqui pode ficar sem o corpo na teoria ficaria assim
      // onSingIn: () => {
      //    onSingIn()
      // }
      //mas tem um recurso javascript que aceita short hand
      onSingIn,
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

// container header 
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Title, Button, TitleButton, ButtonWithBorder } from './styles';
import { useAuth } from '../../hooks/auth';

export default () => {
  const [isClicked, setIsClicked] = useState(false);
  const { isSingIn, onSingIn } = useAuth();

  //esse tipo de rota para esta situação foi melhor abordagem,
  //com link estava redirecionando a path,mas nao modificava o caminho da path
  //nos filhos apenas no browser, apos atualizar manualmente aparecia o conteúdo,
  //dessa forma altera a rota e o conteúdo
  //window.location.pathname so funciona no desenvolvimento, no produção não funciona
  const handleLogin = () => {
    isSingIn && onSingIn();
    // window.location.pathname = navigation;
  };

  return (
    <Container>
      {/* tem que ser as rotas dos filhos o / e do filho marketing */}
      <ButtonWithBorder>
        <Title to='/'>App</Title>
      </ButtonWithBorder>
      {isSingIn ? (
        <Button onClick={handleLogin}>
          <TitleButton to='/'> Log out </TitleButton>
        </Button>
      ) : (
        <Button>
          <TitleButton to='/auth/signin'> Log in </TitleButton>
        </Button>
      )}
    </Container>
  );
};



```

## 

- Não consegui utilizar a versão nova do react router dom
- Precisa entender como implementa o history na nova lib
- Nesse arquivo usei o history,para alternar   entre as rotas autenticadas e não autenticadas
- Havia outra abordagem para isto, então não necessariamente precisaria usar o history, mas para os filhos e ideal essa abordagem, para evitar conflitos entre as rotas como  citado anteriormente

```  javascript
import React, { Fragment, Suspense, lazy, useState, useEffect } from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Loading } from '../components/loading';
import { Container } from './styles';
import Header from '../components/header';
import { useAuth } from '../hooks/auth';

const LazyAuthApp = lazy(() => import('../pages/auth-react'));
const LazyMarketingApp = lazy(() => import('../pages/marketing-react'));
const LazyDashboardApp = lazy(() => import('../pages/dashboard-vue'));

const history = createBrowserHistory();

export default () => {
  const { isSingIn } = useAuth();

  useEffect(() => {
    if (isSingIn) {
      return history.push('/dashboard');
    }
  }, [isSingIn]);

  return (
    <Router history={history}>
      <Header />
      <Suspense
        fallback={
          <Container>
            <Loading />
          </Container>
        }>
        <Switch>
          {/* precisa importar nos componentes a path initial, porque aqui e browser
       dai o memory precisa entender quem sao as url */}
          <Route path='/auth' component={LazyAuthApp} />
          <Route path='/dashboard'>
            {!isSingIn && <Redirect to='/' />}
            <LazyDashboardApp />
          </Route>
          <Route path='/' component={LazyMarketingApp} />
        </Switch>
      </Suspense>
    </Router>
  );
};




```


##

- Em aplicativos que envolve complexos aplicativos com muitos estilos o ideal é usar folha de estilo que deixa o css escopado
- Com styled component, ele implementa hash nas tags assim evita o efeito cascata de css
- Em produção usei abordagem diferente para comunicar entre os pais e filhos, se  possuir  duvida como os filhos se conectam com os pais pode usar esse [repositório](https://github.com/kenjimaeda54/ecommerce-micro-front-end) para entender
- Essa abordagem e diferente, porque o aws usa o S3 para armazenar os builds da aplicação, então dessa forma isolo todos os aplicativos e eles se conectam no aws
- Inclusive no CI/CD fica evidente esse uso do S3

``` javascript


 new ModuleFederationPlugin({
      name: 'App',
      remotes: {
        // posso ter vários remotes entry nesse caso
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
        auth: `auth@${domain}/auth/latest/remoteEntry.js`,
        dashboard: `dashboard@${domain}/dashboard/latest/remoteEntry.js`,
      },
      shared: dependencies,
    }),

```
``` yml

 - run: aws s3 sync dist s3://${{ secrets.AWS_S3_BUCKET_NAME }}/auth/latest
 - run: aws cloudfront create-invalidation --distribution-id ${{ secrets.AWS_DISTRIBUTION_ID }}  --paths '/auth/latest/remoteEntry.js'


```

##





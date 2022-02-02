import React, { Fragment, Suspense, lazy, useState, useEffect } from 'react';
import { Switch, Route, BrowserRouter, useLocation } from 'react-router-dom';
import { Loading } from '../components/loading';
import { Container } from './styles';
import Header from '../components/header';

export default () => {
  const LazyAuthApp = lazy(() => import('../pages/auth-react'));
  const LazyMarketingApp = lazy(() => import('../pages/marketing-react'));

  return (
    <BrowserRouter>
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
          <Route path='/' component={LazyMarketingApp} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

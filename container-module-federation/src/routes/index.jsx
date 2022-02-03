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

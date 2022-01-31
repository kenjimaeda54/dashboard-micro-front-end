import React, { Fragment, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../components/header';

export default () => {
  const LazyAuthApp = lazy(() => import('../pages/auth-react'));
  const LazyMarketingApp = lazy(() => import('../pages/marketing-react'));

  return (
    <Fragment>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {/* precisa importar nos componentes a path initial, porque aqui e browser
       dai o memory precisa entender quem sao as url */}
          <Route path='/auth' component={LazyAuthApp} />
          <Route path='/' component={LazyMarketingApp} />
        </Switch>
      </Suspense>
    </Fragment>
  );
};

import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import MarketingApp from '../pages/marketing-react';
import AuthApp from '../pages/auth-react';
import Header from '../components/header';

export default () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        {/* precisa importar nos componentes a path initial, porque aqui e browser
       dai o memory precisa entender quem sao as url */}
        <Route path='/auth' component={AuthApp} />
        <Route path='/pricing' component={MarketingApp} />
        <Route path='/' component={MarketingApp} />
      </Switch>
    </Fragment>
  );
};

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MarketingApp from '../pages/marketing-react';
import AuthApp from '../pages/auth-react';
import Header from '../components/header';

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* precisa importar nos componentes a path initial, porque aqui e browser
       dai o memory precisa entender quem sao as url */}
        <Route path='/' component={MarketingApp} />
        <Route path='/auth' component={AuthApp} />
      </Switch>
    </BrowserRouter>
  );
};

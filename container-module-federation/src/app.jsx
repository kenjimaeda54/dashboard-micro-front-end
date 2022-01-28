import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MarketingReact from './components/marketing-react';
import GlobalStyle from './GlobalStyle';
import Header from './components/header';
import theme from './styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <MarketingReact />
      </BrowserRouter>
    </ThemeProvider>
  );
};

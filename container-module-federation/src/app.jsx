import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import MarketingReact from './components/marketing-react';
import GlobalStyle from './GlobalStyle';
import Header from './components/header';
import theme from './styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <MarketingReact />
    </ThemeProvider>
  );
};

import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Route from './routes';
import GlobalStyle from './GlobalStyle';
import theme from './styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Route />
    </ThemeProvider>
  );
};

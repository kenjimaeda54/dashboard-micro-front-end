import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import Route from './routes';
import { AuthProvider } from './hooks/auth';
import GlobalStyle from './GlobalStyle';
import theme from './styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Route />
      </AuthProvider>
    </ThemeProvider>
  );
};

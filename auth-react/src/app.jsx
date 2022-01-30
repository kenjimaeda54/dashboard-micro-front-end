import React from "react";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import theme from "./styles/theme";
import { RoutesApp } from "./routes";

const App = ({ history }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RoutesApp history={history} />
    </ThemeProvider>
  );
};

export default App;

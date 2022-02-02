import React from "react";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import theme from "./styles/theme";
import { RoutesApp } from "./routes";

const App = ({ onSingIn }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RoutesApp onSingIn={onSingIn} />
    </ThemeProvider>
  );
};

export default App;

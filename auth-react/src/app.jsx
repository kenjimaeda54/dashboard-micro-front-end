import React from "react";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import theme from "./styles/theme";
import { RoutesApp } from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RoutesApp />
    </ThemeProvider>
  );
};

export default App;

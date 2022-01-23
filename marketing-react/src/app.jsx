import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import LandingPage from "./pages/landing-page";
import GlobalStyles from "./GlobalStyles";
import theme from "./styles/theme";
import { RoutesApp } from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <RoutesApp />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

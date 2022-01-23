import React from "react";
import { ThemeProvider } from "styled-components";
import LandingPage from "./components/landing-page";
import GlobalStyles from "./GlobalStyles";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LandingPage />
    </ThemeProvider>
  );
};

export default App;

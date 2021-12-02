import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global/styles";
import theme from "./global/styles/theme";
import { Routes } from "./routes";
import { Layout } from "./shared/components";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;

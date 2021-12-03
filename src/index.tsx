import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { GlobalStyle } from "./global/styles";
import theme from "./global/styles/theme";
import { MoviesProvider } from "./pages/MoviesList/providers/MoviesProvider";
import reportWebVitals from "./reportWebVitals";
import { Layout } from "./shared/components";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Layout>
        <MoviesProvider>
          <App />
        </MoviesProvider>
      </Layout>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

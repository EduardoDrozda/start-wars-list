import { createGlobalStyle } from "styled-components";

import background from "../../assets/img/background.jpg";

export const GlobalStyle = createGlobalStyle`
  body {
    position: relative;
    width: 100vw;
    height: 100vh;

    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

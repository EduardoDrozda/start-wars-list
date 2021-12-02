import { createGlobalStyle, css } from "styled-components";

const fontFaces = css`
  @font-face {
    font-family: "Star Jedi";
    src: url("../../assets/fonts/starjedi/Starjedi.ttf");
    font-style: normal;
  }

  @font-face {
    font-family: "Star Jout";
    src: url("../../assets/fonts/starjout/Starjout.ttf");
    font-style: normal;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${fontFaces}
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

import { css, CSSObject } from "styled-components";

const theme = {
  colors: {
    primary: "#FFE81F",
    primary_dark: "#D1BE1B",
    secondary: "#000000",
    secondary_light: "#252525",
    text: "#FFFFFF",
  },
  medias: {
    sm: (params: any) => css`
      @media (max-width: 576px) {
        ${params}
      }
    `,
    md: (params: CSSObject) => css`
      @media (max-width: 768px) {
        ${params}
      }
    `,
    lg: (params: any) => css`
      @media (max-width: 992px) {
        ${params}
      }
    `,
    xl: (params: any) => css`
      @media (max-width: 1200px) {
        ${params}
      }
    `,
  },
  fonts: {
    poppins: "Poppins",
  },
};

export default theme;

import { createGlobalStyle } from "styled-components";
import { globalTheme } from "./global-theme";

export const GlobalStyle = createGlobalStyle`
  :root {
    box-sizing: border-box;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    font-family: ${globalTheme.body};
  }
  body {
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${globalTheme.headline};
    margin: 0;
  }
  svg {
    align-self: center;
    font-size: 20px;
  }
  p {
    color: ${globalTheme.grayText}
  }
  * {
    box-sizing: border-box;
  }
`;

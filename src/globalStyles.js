import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-size: 1rem;

    font-kerning: none;
    text-rendering: optimizeSpeed;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
    min-height: 100vh;
  }

  div#app {
    min-height: 100vh;
  }
`;
 
export default GlobalStyle;
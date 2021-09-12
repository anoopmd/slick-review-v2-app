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

  /* Spinner */
  @keyframes spinner {
    to {transform: rotate(360deg);}
  }
  
  .spinner:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 3px solid #C4352E;
    border-top-color: #3EB8BC;
    border-right-color: #297ABA;
    border-bottom-color: #F1852C;
    animation: spinner .6s linear infinite;
  }
`;
 
export default GlobalStyle;
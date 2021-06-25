import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-rendering: optimizeLegibility;
    
  }
 

  div {
    text-align: center;
  }

  a {
 
    text-decoration: none;
  }
  `;

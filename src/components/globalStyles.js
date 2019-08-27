import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: Montserrat, sans-serif;
    margin: 0;
    padding: 0;

  }
`
export default GlobalStyle;
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');
    font-family: 'Titillium Web', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #45A29E
  }
`
export default GlobalStyle;
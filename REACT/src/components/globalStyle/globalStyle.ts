import { createGlobalStyle } from "styled-components";
import Main from "../../pages/MainPage/Main";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    margin :0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}
html {
    scroll-behavior: smooth;
}
body {
    overflow: hidden;
    /* overflow-y: hidden; */
    
}
a{text-decoration:none}
button{
  border:none;
  cursor: pointer;
  background: none;
}
button:hover{
  background: unset;
}

//z-index

.container {
  header{
    z-index: 500;
  }
  .modal{
    z-index:700;
  }
  Main{
    z-index: 400;
    nav {
      z-index: 100;
    }
    #data-container{
      z-index: 50;
    }
  }
}

`;

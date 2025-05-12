import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: #fffff0;
    position: relative;
    display: flex;
    flex-direction: column;
    color: rgb(26, 126, 207);
  }

  .dosis-font {
    font-family: "Dosis", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
  }
`;

export default GlobalStyles;
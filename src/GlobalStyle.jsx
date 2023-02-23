import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }
    body{
        background-color: #1A1A1A;
    }
`
export default GlobalStyle
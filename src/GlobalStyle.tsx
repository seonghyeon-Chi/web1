import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins';
    background-color: #111;
    font-weight: 100;
    line-height: 1.5;
    color: #222;
    word-break: keep-all;
    word-wrap: break-word;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smooting: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`

export default GlobalStyle;
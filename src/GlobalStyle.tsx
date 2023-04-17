import { createGlobalStyle } from 'styled-components'
import backgroundImage from '/back-image.jpg'

const GlobalStyle = createGlobalStyle`
  @media screen and (max-width:1799px) {
  /* 데스크탑 */
    * {
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
      font-size: 16px;
    }
  }

  @media screen and (max-width:1199px) {
  /* 타블렛 가로 */
    * {
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
      font-size: 12px;

    }
  }
  @media screen and (max-width:899px) {
  /* 모바일 가로, 타블렛 세로 */
  * {
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
      font-size: 8px;

    }
  }

  @media screen and (max-width:599px) {
  /* 모바일 세로 */
  * {
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
      font-size: 4px;

    }
  }
  body {
    font-family: 'Poppins';
    /* background-color: #111; */
    font-weight: 100;
    line-height: 1.5;
    color: #222;
    word-break: keep-all;
    word-wrap: break-word;
    margin: 0px;
    padding: 0;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smooting: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  header {
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: 100%;
    min-height: 55.375em;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    isolation: isolate;
    border-radius: 0px 0px 4em 4em;
  }
  footer {
    background: #f9f9f9;
    min-height: 25.25em;
  }
`

export default GlobalStyle;
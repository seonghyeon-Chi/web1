import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RecoilRoot } from 'recoil'
import GlobalStyle from './GlobalStyle';
import styled, { ThemeProvider } from 'styled-components'
import { LightTheme } from './Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
        <ThemeProvider theme={LightTheme}>
          <App />
        </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
)

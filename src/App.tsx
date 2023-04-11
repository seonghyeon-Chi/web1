import { useState, useContext } from 'react'
import { Button } from './Components/Button';
import styled, { useTheme, ThemeProvider } from 'styled-components';
import GlobalContext from './GlobalContext';
import { Forms } from './Components/Forms';
import { Rating } from './Components/Rating';
import { Content1 } from './Components/Content1';
import { Content2 } from './Components/Content2';


function App() {
  const theme = useTheme()
  const context = useContext(GlobalContext)

  return (
    <div className="App">
      <Forms id="test" label="test_label" content="이거잘되나? 길이 추가"/> 
      <Content1 />
      <Content2 />
    </div>
  )
}

export default App

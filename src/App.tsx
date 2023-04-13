import { useState, useContext } from 'react'
import { Button } from './Components/Button';
import styled, { useTheme, ThemeProvider } from 'styled-components';
import GlobalContext from './GlobalContext';
import { Forms } from './Components/Forms';
import { Rating } from './Components/Rating';
import { Content1 } from './Components/Contents/Content1';
import { Content2 } from './Components/Contents/Content2';
import { Content3 } from './Components/Contents/Content3';
import { Content4 } from './Components/Contents/Content4';
import { Footer } from './Components/Layouts/Footer';
import { Topbar } from './Components/Layouts/Topbar';


function App() {
  const theme = useTheme()
  const context = useContext(GlobalContext)

  return (
    <div className="App">
      <header>
        <Topbar />
      </header>
      <Footer />
    </div>
  )
}

export default App

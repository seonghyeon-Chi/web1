import { useState, useContext } from 'react'
import { Footer } from './Components/Layouts/Footer';
import { Header } from './Components/Layouts/Header';
import Home from './Page/Home/Home';


function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App

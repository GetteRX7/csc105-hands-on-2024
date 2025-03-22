import { useState } from 'react'
import Navbar from './assets/Navbar'
import Home from './pages/home'
import AboutMe from './pages/aboutme'
import Gallery from './pages/gallery'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Navbar />
        <Home />
        <AboutMe/>
        <Gallery/>
      </div>
      
  )
}

export default App

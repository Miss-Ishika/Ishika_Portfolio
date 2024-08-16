import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Project from './components/Project'
import Experience from './components/Experience'
import Academics from './components/Academics'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Project />
      <Experience />
      <Academics/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

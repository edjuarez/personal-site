import { useState } from 'react'
import './App.css'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import {Contact} from './components/Contact/Contact'
import { MyWork } from './components/myWork/MyWork'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app-background">
      <Hero />
      <About />
      {/* <Skills /> */}
      <MyWork />
      <Contact />
    </div>
    </>
  )
}

export default App

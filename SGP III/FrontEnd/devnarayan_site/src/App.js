import React from 'react'
import Home from './Page/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Page/About/About'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default App
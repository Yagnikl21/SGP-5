import React from 'react'
import Home from './Page/Home/Home'
import { Route, Router, browserrouter , router , routes } from 'react-router-dom'
import About from './Page/About/About'

function App() {
  return (
    <Router>
      <Route path='/' Component={<Home />} />
      <Route path='/about' Component={<About />} />
      
    </Router>
  )
}

export default App
import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import Records from './pages/records'
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './components/home'
import Challenges from './pages/challenges'

function App() {
  return (
    <BrowserRouter>
   {/* Navbar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/records" element={<Records />} />
        <Route path="/challenges" element={<Challenges/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

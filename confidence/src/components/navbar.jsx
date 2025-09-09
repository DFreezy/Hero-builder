import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="bg-amber-300 p-4 flex-row justify-between items-center">
        <ul className='text-red-400 font-bold text-lg flex gap-8'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
          <Link to="/records">Records</Link>
        </ul>
      </div>
  )
}
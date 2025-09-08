import React from 'react'

export default function Navbar() {
  return (
    <div className="bg-amber-300 p-4 flex-row justify-between items-center">
        <ul className='text-red-400 font-bold text-lg flex gap-8'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
          <li>Records</li>
        </ul>
      </div>
  )
}
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  function popUp() {
    const dialog = document.getElementById('loginDialog');
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      alert("The <dialog> API is not supported by this browser");
    }
  }

  function closePopUp() {
    const dialog = document.getElementById('loginDialog');
    dialog.close();
  }
  return (
    <div className="bg-amber-300 p-4 flex-row justify-between items-center">
        <ul className='text-red-400 font-bold text-lg flex gap-8'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/services">Services</Link>
          <Link to="/records">Records</Link>
        </ul>
        <button onClick={() => document.getElementById('loginDialog').show()} className='bg-red-400 text-white px-4 py-2 rounded-lg mt-2 hover:bg-red-500'>Login</button>
      <dialog id="loginDialog" className='p-4 rounded-lg'>
        <form method="dialog">
          <h2 className='text-xl font-bold mb-4'>Login</h2>
          <label className='block mb-2'>Username:</label>
          <input type="text" className='border border-gray-300 rounded-lg p-2 w-full mb-4' />
          <label className='block mb-2'>Password:</label>
          <input type="password" className='border border-gray-300 rounded-lg p-2 w-full mb-4' />
          <button type="submit" className='bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500'>Submit</button>
          <button type="button" className='bg-gray-300 text-black px-4 py-2 rounded-lg ml-2 hover:bg-gray-400' onClick={() => document.getElementById('loginDialog').close()}>Close</button>
        </form>
      </dialog>
      </div>
  )
}
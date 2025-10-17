import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ coins = 0 }) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const dialog = document.getElementById('loginDialog');
    if (dialog) dialog.close();
    navigate('/challengeApp');
  }

  return (
    <div className="bg-amber-300 p-4 flex flex-col sm:flex-row justify-between items-center shadow-md">
      <ul className='text-red-400 font-bold text-lg flex gap-6'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/motivation">Motivation</Link>
        <Link to="/records">Records</Link>
      </ul>

      <div className="flex items-center gap-4 mt-2 sm:mt-0">
        <span className="font-semibold text-yellow-800">💰 {coins} Coins</span>
        <button 
          onClick={() => document.getElementById('loginDialog').showModal()} 
          className='bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500'
        >
          Login
        </button>
      </div>

      <dialog id="loginDialog" className='p-4 rounded-lg'>
        <form onSubmit={handleSubmit}>
          <h2 className='text-xl font-bold mb-4'>Login</h2>
          <label className='block mb-2'>Username:</label>
          <input type="text" className='border border-gray-300 rounded-lg p-2 w-full mb-4' />
          <label className='block mb-2'>Password:</label>
          <input type="password" className='border border-gray-300 rounded-lg p-2 w-full mb-4' />
          <div className='flex justify-end gap-2'>
            <button type="submit" className='bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500'>Submit</button>
            <button type="button" className='bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400' onClick={() => document.getElementById('loginDialog').close()}>Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
}

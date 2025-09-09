import React from 'react'

export default function Records() {
  return (
    <div className='p-4 text-center text-2xl font-bold bg-amber-200'>
      <h1>Day 1</h1>
      <p>Did 5 pushups in public</p>
      <video controls="controls" autoplay="autoplay" width="600" height="400" loop className='mx-auto my-4'>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
    </div>
  )
}
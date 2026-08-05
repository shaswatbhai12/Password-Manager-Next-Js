import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-4 h-16 bg-border text-background'>
        <span>NoPass</span>
      <ul className='flex gap-5 justify-start items-center'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>
    </nav>
  )
}

export default Navbar

import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-950 bg-opacity-98 text-white py-4 px-8 md:px-16 lg:px-24'>
    <div className='container py-2 flex justify-center md:justify-between item-center'>
        <div className='text-2xl font-bold hidden md:inline'>ISHIKA</div>
        <div className='space-x-16'>
            <a href='#home' className='hover:text-gray-400'>Home</a>
            <a href='#home' className='hover:text-gray-400'>Skills</a>
            <a href='#home' className='hover:text-gray-400'>Projects</a>
            <a href='#home' className='hover:text-gray-400'>Experience</a>
            <a href='#home' className='hover:text-gray-400'>Contact me</a>
        </div>
        <button className='hover:text-black hover:font-bold bg-gradient-to-r from-green-400 to-blue-500 hidden md:inline px-4 py-2 rounded-full transform transition-transform duration-300  hover:scale-105'>Contact</button>
    </div>
    </nav>
  )
}

export default Navbar
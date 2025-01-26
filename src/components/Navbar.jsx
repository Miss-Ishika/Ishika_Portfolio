import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-950 bg-opacity-80 bg-translucent text-white py-4 px-8 md:px-16 lg:px-24 fixed top-0 left-0 right-0 z-10'>
    <div className='container py-2 flex justify-between items-center'>
        <div className='text-2xl font-bold '>ISHIKA</div>
        <div className='lg:space-x-16 hidden md:inline space-x-8'>
            <a href='#home' className='hover:text-gray-400'>Home</a>
            <a href='#home' className='hover:text-gray-400'>Skills</a>
            <a href='#home' className='hover:text-gray-400'>Projects</a>
            <a href='#home' className='hover:text-gray-400'>Experience</a>
            <a href='#home' className='hover:text-gray-400'>Contact me</a>
        </div>
        <button className=' bg-gradient-to-r from-green-400 to-blue-500   px-4 py-2 rounded-full transform transition-transform duration-300  hover:scale-105'>Contact</button>
    </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import HeroImage from '../assets/photo2.jfif'

const Hero = () => {
  return (
    <div className='bg-slate-950 text-white text-center py-16'>
        <img src={HeroImage} alt='' 
          className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
          transition-transform duration-300 hover:scale-105'
        />
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text 
            bg-gradient-to-r from-green-400 to-blue-500'>Ishika Raj singh</span>
            , Full-Stack Developer
        </h1>
        <p className='mt-4 text-xl text-gray-300'>
          I specialised in building modern and responsive web application.
        </p>
        <div className='mt-8 space-x-4'>
          <button className='hover:text-black hover:font-bold bg-gradient-to-r from-green-400 to-blue-500 hidden md:inline px-4 py-2 rounded-full transform transition-transform duration-300  hover:scale-105'>Download Resume</button>
          <button className='hover:text-black hover:font-bold bg-gradient-to-r from-purple-400 to-red-500 hidden md:inline px-4 py-2 rounded-full transform transition-transform duration-300  hover:scale-105'>linkedIn</button>
        </div>
    </div>
  )
}

export default Hero
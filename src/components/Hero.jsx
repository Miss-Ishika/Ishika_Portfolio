import React from 'react'
import HeroImage from '../assets/photo2.jfif'
import { motion } from 'framer-motion'

const fadeInUpAni = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 2,
    },
  },
};

const Hero = () => {
  return (
    <div className='bg-slate-950 text-white text-center py-56 '>
      <motion.div variants={fadeInUpAni} initial="hidden" animate="show" >
        <img src={HeroImage} alt='' 
          className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
          transition-transform duration-300 hover:scale-105'
          variants={fadeInUpAni}
        />
        <motion.h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text 
            bg-gradient-to-r from-green-400 to-blue-500 variants={fadeInUpAni}'>Ishika Raj singh</span>
            , Full-Stack Developer
        </motion.h1>
        <motion.p className='mt-4 text-xl text-gray-300 variants={fadeInUpAni}'>
          I specialised in building modern and responsive web application.
        </motion.p>
        <motion.div className='mt-8 space-x-4 variants={fadeInUpAni}'>
          <button className=' bg-gradient-to-r from-green-400 to-blue-500 hidden md:inline px-4 py-2 rounded-full transform transition-transform duration-300  hover:scale-105'>Download Resume</button>
          <button className=' bg-gradient-to-r from-purple-400 to-red-500 hidden md:inline px-4 py-2 rounded-full transform transition-transform duration-300  hover:scale-105'>linkedIn</button>
        </motion.div>
    </motion.div>
    </div>
  )
}

export default Hero
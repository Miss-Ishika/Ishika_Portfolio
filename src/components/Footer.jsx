import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { TfiLinkedin } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='bg-slate-950 text-white py-8'>
        <div className='container py-8 mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4' >
                <div className='flex-1 mb-4 md:mb-0'>
                    <h3 className='text-2xl font-bold mb-2'>ISHKA</h3>
                    <p className='text-gray-300'>
                    I specialised in building modern and responsive web application.
                    </p>
                </div>
                <div className='flex-1 w-full'>
                    <form className='flex items-center justify-center'>
                    <input type='email' placeholder='Enter Email'
                        className='w-full p-2 rounded-l-lg bg-slate-800 border'
                    />
                    <button
                    type='submit'
                    className='bg-gradient-to-r from-green-400 to-blue-500 border text-white font-bold px-4 py-2 rounded-r-lg'>Subscribe</button>
                    </form>
                </div>
            </div>
            <hr className='my-6 border-gray-300' />
        </div>
       <div className='flex flex-col md:flex-row justify-between md:px-48'>
       <div>
            <p> &copy; {new Date().getFullYear()}</p>
        </div>
        <div className='flex space-x-4'>
            <a href='' className='text-gray-400 hover:text-white'><FaFacebookF /></a>
            <a href='' className='text-gray-400 hover:text-white'><RiInstagramFill /></a>
            <a href='' className='text-gray-400 hover:text-white'><TfiLinkedin /></a>
            <a href='' className='text-gray-400 hover:text-white'><FaTwitter /></a>
        </div>
        <div className='flex space-x-4'>
            <a href='#home' className='text-gray-400 hover:text-white'>Privacy</a>
            <a href='#' className='text-gray-400 hover:text-white'>Terms of Service</a>
        </div>
       </div>
    </footer>
  )
}

export default Footer
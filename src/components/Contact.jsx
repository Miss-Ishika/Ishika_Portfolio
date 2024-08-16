import React from 'react'
import pic from "../assets/contact.jpg"

const Contact = () => {
  return (
    <div className='bg-slate-950 text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center md:mb-24'>Contact Me</h2>
            <div className='flex flex-col md:flex-row justify-between md:space-x-12'>
              <div className='flex-1'>
                <img src={pic} alt="contact" className='w-1/2 rounded-2xl'/>
              </div>
              <div className='flex-1 w-full'>
                <form className='space-y-4' >
                  <div>
                    <label htmlFor='name' className='block mb-2  text-xl font-bold'>Your Name</label>
                    <input type="text" className='w-full p-2 rounded bg-slate-800 border border-transparent focus:outline-none focus:border-indigo-500/100' placeholder='Enter your name'/>
                  </div>
                  <div>
                    <label htmlFor='email' className='block mb-2  text-xl font-bold'>Email</label>
                    <input type="text" className='w-full p-2 rounded bg-slate-800 border border-transparent focus:outline-none focus:border-indigo-500/100' placeholder='Enter your email'/>
                  </div>
                  <div>
                    <label htmlFor='name' className='block mb-2  text-xl font-bold'>Message</label>
                    <textarea type="text" rows="5" className='w-full p-2 rounded bg-slate-800 border border-transparent focus:outline-none focus:border-indigo-500/100' placeholder='Enter the message'/>
                  </div>
                  <button className='hover:text-black hover:font-bold bg-gradient-to-r from-green-400 to-blue-500 hidden md:inline px-8 py-2 rounded-full transform transition-transform duration-300  hover:scale-105'>Send</button>
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
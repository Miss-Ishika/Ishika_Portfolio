import React from 'react'
import aboutImg from '../assets/skills.jpg'

const About = () => {
  return (
    <div className='bg-slate-950 text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={aboutImg} alt='' className='w-72 h-80 rounded-2xl object-cover mb-8 md:mb-0'/>
                <div className='flex-1'>
                <p className='text-lg mb-8'>
                Passionate web developer with expertise in building responsive, user-friendly websites and web applications. Proficient in modern JavaScript frameworks like React and Vue.js, with a strong foundation in HTML, CSS, and Tailwind CSS. Committed to delivering clean, efficient code and continuously learning new technologies to enhance user experiences.
                </p>
                <div className='space-y-4'>
                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                        <div className='grow bg-slate-900 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                            trnasform transition-transform duration-300 hover:scale-105 w-10/12'>

                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>JavaScript</label>
                        <div className='grow bg-slate-900 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                            trnasform transition-transform duratuon-300 hover:scale-105 w-7/12'>

                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>React Js</label>
                        <div className='grow bg-slate-900 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                            trnasform transition-transform duratuon-300 hover:scale-105 w-9/12'>

                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>DSA</label>
                        <div className='grow bg-slate-900 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                            trnasform transition-transform duratuon-300 hover:scale-105 w-10/12'>

                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className='w-2/12'>Figma</label>
                        <div className='grow bg-slate-900 rounded-full h-2.5'>
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
                            trnasform transition-transform duratuon-300 hover:scale-105 w-5/12'>

                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
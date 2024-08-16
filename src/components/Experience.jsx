import React from 'react'
import vezo from '../assets/vezo.png'
import infosys from '../assets/infosys.png'
import aicte from '../assets/aicte.png'

const exp = [
    {
        id: 1,
        position: "Summer Internship",
        image: infosys,
        company: "Infosys Springborad",
        duration: "March-June, 2024",
        desc: "As a Web Development Intern, you will have the opportunity to gain hands-on experience in building and maintaining web applications. You'll work closely with our experienced development team, contributing to real projects, learning best practices, and enhancing your coding skills in a professional environment. ",
        certificate: "http://certificate.com"
    },
    {
        id: 2,
        position: "Flutter Developer Intern",
        image: vezo,
        company: "  Vezo (Start-up)",
        duration: "March-July, 2023",
        desc: "As a Web Development Intern, you will have the opportunity to gain hands-on experience in building and maintaining web applications. You'll work closely with our experienced development team, contributing to real projects, learning best practices, and enhancing your coding skills in a professional environment. ",
        certificate: "http://certificate.com"
    },
    {
        id: 3,
        position: "Web Developer Intern",
        image: aicte,
        company: "EY in collaboration with AICTE",
        duration: "Feb-Mar, 2024",
        desc: "As a Web Development Intern, you will have the opportunity to gain hands-on experience in building and maintaining web applications. You'll work closely with our experienced development team, contributing to real projects, learning best practices, and enhancing your coding skills in a professional environment. ",
        certificate: "http://certificate.com"
    },
]

const Experience = () => {
  return (
    <div className='bg-slate-950 text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Experiences</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    exp.map(item => (
                        <div key={item.id} className='bg-slate-900 px-6 pb-6 rounded-lg hover:shadow-lg tenasform transition-transform duration-300 border border-slate-800 hover:scale-105'>
                            <img src={item.image} alt={item.company} className='w-120 h-60 rounded-lg mx-auto my-8'/>
                            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>{item.position}</h3>
                                <div className='flex justify-between my-4 text-lg'>
                                    <span className='text-slate-200'>{item.company}</span>
                                    <span className='text-gray-500 font-bold'>{item.duration}</span>
                                </div>
                                <p className='text-gray-500 mt-10'>
                                    {item.desc}
                                </p>
                                
                        </div>
                    ))
                }
            </div>
        </div>
  </div>
  )
}

export default Experience
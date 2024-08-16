import React from 'react'
import { IoMdCode } from "react-icons/io";
import { FaLink } from "react-icons/fa6";


const projects = [
    {
        id: 1,
        title: "Sweet Spot",
        description: "BookWorm is a full-stack web application designed to provide users with a seamless online bookstore experience.",
        source: "http://miss-Ishika.github",
        live: "http://githubsweetspot.github"
    },
    {
        id: 2,
        title: "Sweet Spot",
        description: "BookWorm is a full-stack web application designed to provide users with a seamless online bookstore experience.",
        source: "http://miss-Ishika.github",
        live: "http://githubsweetspot.github"
        
    },
    {
        id: 3,
        title: "Sweet Spot",
        description: "BookWorm is a full-stack web application designed to provide users with a seamless online bookstore experience.",
        source: "http://miss-Ishika.github",
        live: "http://githubsweetspot.github"
    },
    {
        id: 4,
        title: "Sweet Spot",
        description: "BookWorm is a full-stack web application designed to provide users with a seamless online bookstore experience.",
        source: "http://miss-Ishika.github",
        live: "http://githubsweetspot.github"
    },
    {
        id: 5,
        title: "Sweet Spot",
        description: "BookWorm is a full-stack web application designed to provide users with a seamless online bookstore experience.",
        source: "http://miss-Ishika.github",
        live: "http://githubsweetspot.github"
    },
    {
        id: 6,
        title: "Sweet Spot",
        description: "BookWorm is a full-stack web application designed to provide users with a seamless online bookstore experience.",
        source: "http://miss-Ishika.github",
        live: "http://githubsweetspot.github"
    }
]

const Project = () => {
  return (
    <div className='bg-slate-950 text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map(item => (
                    <div key={item.id}
                    className='bg-slate-900 px-6 pb-6 rounded-lg hover:shadow-lg tenasform transition-transform duration-300 border border-slate-800 hover:scale-105'>
                        <h3 className='text-3xl mt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>{item.title}</h3>
                        <p className='mt-2 text-gray-500'>
                            {item.description}
                        </p>
                        <div className='mt-3 flex gap-7'>
                            <a href={item.source} className='text-4xl text-emerald-500 hover:scale-105'><IoMdCode />
</a>
                            <a href={item.live}
                            className='text-3xl text-teal-500 hover:scale-105'><FaLink />
</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Project
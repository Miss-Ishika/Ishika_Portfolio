import React from 'react'
import nit from '../assets/nit3.jpg'
import ggps from '../assets/ggps.jpg'
import fiitjee from '../assets/fiitjee2.png'

const Academics = () => {
  return (
    // <div className='bg-slate-950 w-full px-20 h-10 object-cover'>
    <div className='bg-slate-950 text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Academic Journey</h2>
            <div id="carouselExampleCaptions" class="carousel slide ">
                <div class="carousel-indicators ">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner rounded-3xl border border-slate-500 text-sm md:text-xl">
                    <div class="carousel-item active">
                    <img src={nit} class="d-block h-100 w-100" alt="..."/>
                    <div class="carousel-caption text-white bg-slate-900 bg-opacity-90 p-2 md:mb-8 rounded-2xl border">
                        <h5 className='text-xl md:text-4xl md:m-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>National Institute of Technology, Jamshedpur</h5>
                        <span className='m-2  font-bold'>2021 - 2025</span>
                        <p className='m-2 '>Bachelor of Technology, with current CGPA of <span className='font-bold'>8.02</span> </p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={ggps} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption text-white bg-slate-900 bg-opacity-90 p-2 md:mb-8 rounded-2xl border">
                        <h5 className='text-xl md:text-4xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Guru Gobind Singh Public School, Dhanbad</h5>
                        <span className='font-bold'>Affiliated to CBSE</span>
                        <div className='flex justify-center '>
                            <div className='flex flex-col border-r-2 border-slate-500 pr-8'>
                                <span>Intermediate (2021)</span>
                                <span>Passing Percentage: <span className='font-bold'>91%</span> </span>
                            </div>
                            <div className='flex flex-col ml-8'>
                                <span >Matriculation (2019)</span>
                                <span>Passing Percentage: <span className='font-bold'>97%</span> </span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={fiitjee} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption text-white bg-slate-900 bg-opacity-90 p-2 mb-8 rounded-2xl border border-orange-600">
                        <h5 className=' text-xl md:text-4xl m-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>FIITJEE, Dhanbad</h5>
                        <span className='m-2 font-bold'>2018 - 2021</span>
                        <p className='m-2'>Qaulified JEE Mains</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
        
        


  )
}

export default Academics
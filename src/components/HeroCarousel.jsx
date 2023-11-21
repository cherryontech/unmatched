// LIBRARY IMPORTS
import React from 'react';
import { Link } from 'react-router-dom'

// LOCAL IMPORTS
import carousel1 from '../assets/images/home/carousel1.png';
import carousel2 from '../assets/images/home/carousel2.png';
import carousel3 from '../assets/images/home/carousel3.png';

export default function HeroCarousel() {
  return (
    <div className="carousel w-full scroll-smooth">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full scroll-smooth">
        <div className="hero h-[35rem] bg-primary">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={carousel1} className="max-w-sm rounded-full mx-auto w-[305px] h-[305px] shadow-2xl" />
            <div className='h-[305px] w-[50rem]'>
              <p className="text-5xl py-1 text-white font-bold text-[20px]]">End Imposter Syndrome</p>
              <p className="py-3 text-white text-2xl w-[85%]">Every unique perspective adds value to the world of STEM. </p>
              <p className="py-3 text-white text-2xl w-[85%]">Free yourself from not fitting in and pave the way for your STEM journey. </p>
              <div className='mt-[2rem]'>
              <Link className="bg-secondary rounded-full md:px-4 md:py-2  overflow-hidden text-white  md:text-[25px] font-bold hover:bg-gradient-to-r from-red-500 to-purple-500">Learn More</Link>
            </div>
            </div>
          </div>
          
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full scroll-smooth">
        <div className="hero h-[35rem] bg-primary">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={carousel2} className="max-w-sm  mx-auto w-[20rem] h-[25rem] shadow-2xl" />
            <div className='h-[305px] w-[50rem]'>
              <p className="text-5xl py-1 text-white font-bold text-[20px]]">Your Story Matters</p>
              <p className="py-3 text-white text-2xl w-[85%]">Your journey is unique, and every step is a victory. </p>
              <p className="py-3 text-white text-2xl w-[85%]">Inspire your network with your Unmatched story. </p>
              <div className='mt-[2rem]'>
              <Link className="bg-secondary rounded-full md:px-4 md:py-2 hover:bg-gradient-to-r from-red-500 to-purple-500 overflow-hidden text-white  md:text-[25px]  font-bold">Learn More</Link>
            </div>
            </div>
          </div>
          
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full scroll-smooth">
        <div className="hero h-[35rem] bg-primary">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={carousel3} className="max-w-sm  mx-auto w-[20rem] h-[25rem] shadow-2xl" />
            <div className='h-[305px] w-[50rem]'>
              <p className="text-5xl py-1 text-white font-bold text-[20px]]">Connect with STEM Voices</p>
              <p className="py-3 text-white text-2xl w-[85%]">Uncover stories of STEM leaders who’ve overcome imposter syndrome and fostered a more inclusive and empowering STEM community. </p>
              <p className="py-3 text-white text-2xl w-[85%]"> Find strength and inspiration in their experiences as you navigate your own STEM path. </p>
              <div className='mt-[2rem]'>
              <Link className="bg-secondary rounded-full md:px-4 md:py-2 hover:bg-gradient-to-r from-red-500 to-purple-500 overflow-hidden text-white  md:text-[25px] font-bold">Learn More</Link>
            </div>
            </div>
          </div>
          
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  )
}

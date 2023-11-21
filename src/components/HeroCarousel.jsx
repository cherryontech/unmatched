// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import carousel1 from '../assets/images/home/carousel1.png';
import carousel3 from '../assets/images/home/carousel3.png';

export default function HeroCarousel() {
  return (
    <div className="carousel w-full">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <div className="hero h-[35rem] bg-primary">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={carousel1} className="max-w-sm rounded-full mx-auto w-[305px] h-[305px] shadow-2xl" />
            <div className='h-[305px] w-[50rem]'>
              <p className="text-5xl py-1 text-white font-bold text-[20px]]">End Imposter Syndrome</p>
              <p className="py-3 text-white text-2xl w-[85%]">Every unique perspective adds value to the world of STEM. </p>
              <p className="py-3 text-white text-2xl w-[85%]">Free yourself from not fitting in and pave the way for your STEM journey. </p>
              <button className="btn btn-secondary rounded-full  overflow-hidden text-white my-9 text-[20px] font-bold">Learn More</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        {/* Repeat the hero content with different content/images as needed */}
      </div>
      {/* ... additional slides */}
    </div>
  )
}

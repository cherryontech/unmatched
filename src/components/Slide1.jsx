// LIBRARY IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';

// LOCAL IMPORTS
import carousel1 from '../assets/images/home/carousel1.png';

export default function Slide1({ scroll }) {
  return (
    <div className="carousel-item relative">
      <div className="hero h-[30rem] lg:h-[35rem] md:h-[30rem] sm:h-[25rem] max-h-screen w-full bg-primary">
        <div className="hero-content flex-col lg:flex-row items-center lg:items-start">
          {/* Text Section */}
          <div className="flex-1 px-4 lg:px-8 text-center lg:text-left">
            <p className="text-3xl lg:text-5xl font-bold text-white mt-4 lg:mt-0">
              End Imposter Syndrome
            </p>
            <p className="mt-4 text-white text-sm sm:text-base md:text-lg lg:text-xl">
              Every unique perspective adds value to the world of STEM.{' '}
            </p>
            <p className="mt-2 mb-4 text-white text-sm sm:text-base md:text-lg lg:text-xl">
              Free yourself from not fitting in and pave the way for your
              STEM journey.{' '}
            </p>
            {/* Button for large screens */}
            <div className="mt-[2rem] hidden lg:block">
              <Link
                onClick={() => scroll()}
                className="bg-secondary rounded-full px-4 lg:py-2 p-1 overflow-hidden text-white lg:text-[20px] text-[15px] font-bold hover:bg-gradient-to-r from-red-500 to-purple-500"
              >
                Learn More
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="lg:w-72 lg:h-72 md:w-52 md:h-52 sm:w-40 sm:h-40 w-40 h-40 rounded-full overflow-hidden">
              <img
                src={carousel1}
                className="w-full h-full object-cover"
                alt="Description"
              />
            </div>
          </div>
          {/* Button for small and medium screens */}
          <div className="mt-[2rem] lg:hidden w-full text-center">
            <Link
              onClick={() => scroll()}
              className="bg-secondary rounded-full px-4 py-2 text-white text-[20px] font-bold hover:bg-gradient-to-r from-red-500 to-purple-500"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

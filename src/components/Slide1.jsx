// LIBRARY IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';

// LOCAL IMPORTS
import carousel1 from '../assets/images/home/carousel1.png';

export default function Slide1({ scroll }) {
  return (
    <div className="relative flex items-center justify-center h-full bg-primary">
      <div className="md:w-[70%] w-[90%] mx-auto flex flex-col lg:flex-row justify-center items-center xl:gap-16 lg:gap-10 gap-4 text-white">
        <div className="flex flex-col gap-0 md:gap-5 justify-center text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            End Imposter Syndrome
          </h1>
          <div className="xl:text-2xl lg:text-xl lg:w-[85%] flex flex-col gap-1 lg:gap-4">
            <p>Every unique perspective adds value to the world of STEM.</p>
            <p>
              Free yourself from not fitting in and pave the way for your STEM
              journey.
            </p>
          </div>
          {/* Button for large screens */}
          <div className="hidden lg:block">
            <Link
              onClick={scroll} 
              className="bg-secondary rounded-full px-4 lg:py-2 p-1 overflow-hidden lg:text-lg text-base font-bold hover:bg-gradient-to-r from-red-500 to-purple-500"
            >
              Learn More
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className="lg:w-80 lg:h-80 md:w-56 md:h-56 w-40 h-40 mask mask-circle">
          <img
            src={carousel1}
            className="w-full h-full object-cover"
            alt="Abstract art of outlines of people filled in with colorful patterns representing individuals' uniqueness."
          />
        </div>
        {/* Button for small and medium screens */}
        <div className="lg:hidden w-full text-center">
          <Link
           onTouchStart={scroll}
            className="bg-secondary rounded-full px-4 py-2 text-sm md:text-base font-bold hover:bg-gradient-to-r from-red-500 to-purple-500"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

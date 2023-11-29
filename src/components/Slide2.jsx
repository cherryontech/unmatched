// LIBRARY IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';

// LOCAL IMPORTS
import carousel2 from '../assets/images/home/carousel2.png';

export default function Slide2({ scroll }) {
  return (
    <div className="relative flex items-center justify-center h-full bg-primary">
      <div className="md:w-[70%] w-[90%] mx-auto flex flex-col lg:flex-row justify-center items-center xl:gap-16 lg:gap-10 gap-4 text-white">
        <div className="flex flex-col gap-0 md:gap-5 justify-center text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Your Story Matters
          </h1>
          <div className="xl:text-2xl lg:text-xl lg:w-[85%] flex flex-col items-center justify-center gap-1">
            <p>Your journey is unique, and every step is a victory.</p>
            <p>Inspire your network with your Unmatched story.</p>
          </div>
          {/* Button for large screens */}
          <div className="hidden lg:block">
            <Link
              onClick={() => scroll()}
              className="bg-secondary rounded-full px-4 lg:py-2 p-1 overflow-hidden lg:text-lg text-base font-bold hover:bg-gradient-to-r from-red-500 to-purple-500"
            >
              Learn More
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className="">
          <div className="w-36 lg:w-52 xl:w-60 h-auto">
            <img
              src={carousel2}
              className="w-full h-full object-cover"
              alt="Card component with user icon and text: Your Name Here, STEM Industry Leader"
            />
          </div>
        </div>
        {/* Button for small and medium screens */}
        <div className="lg:hidden w-full text-center">
          <Link
            onClick={() => scroll()}
            className="bg-secondary rounded-full px-4 py-2 text-sm md:text-base font-bold hover:bg-gradient-to-r from-red-500 to-purple-500"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

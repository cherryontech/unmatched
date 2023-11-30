// LIBRARY IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';

// LOCAL IMPORTS
import carousel3 from '../assets/images/home/carousel3.png';

export default function Slide3({ scroll }) {
  return (
    <div className="relative flex items-center justify-center h-full bg-primary">
      <div className="md:w-[70%] w-[90%] mx-auto flex flex-col lg:flex-row justify-center items-center xl:gap-16 lg:gap-10 gap-4 text-white">
        <div className="flex flex-col gap-0 md:gap-5 justify-center text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Connect with STEM Voices
          </h1>
          <div className="xl:text-2xl lg:text-xl lg:w-[85%] flex flex-col items-center justify-center gap-4">
            <p>
              Uncover stories of STEM leaders who’ve overcome imposter syndrome
              and fostered a more inclusive and empowering STEM community.
            </p>
            <p>
              Find strength and inspiration in their experiences as you navigate
              your own STEM path.
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
        <div className="xl:w-[80%] lg:w-full lg:h-72 w-40 h-40">
          <img
            src={carousel3}
            className="w-full h-full object-cover rounded-md"
            alt=""
          />
        </div>
        {/* Button for small and medium screens */}
        <div className="lg:hidden w-full text-center">
          <Link
         onTouchStart={scroll}
            className="text-sm md:text-base bg-secondary rounded-full px-3 py-1 md:px-4 md:py-2 font-bold hover:bg-gradient-to-r from-red-500 to-purple-500"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

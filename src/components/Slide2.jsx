// LIBRARY IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';

// LOCAL IMPORTS
import carousel2 from '../assets/images/home/carousel2.png';

export default function Slide2({ scroll }) {
  return (
    <div className="carousel-item relative w-full scroll-smooth">
      <div className="hero  h-[30rem] lg:h-[35rem] max-h-[100%] bg-primary">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={carousel2}
            className="max-w-sm  mx-auto h-[12rem] w-[9rem] lg:w-[20%] lg:h-[25%] shadow-2xl"
          />
          <div className="h-[305px] w-[100%] md:justify-start  justify-center lg:text-start text-center lg:w-[50rem] sm:h-fit">
            <p className="lg:text-5xl py-1 text-white font-bold text-[25px] lg:text-[20px]]">
              Your Story Matters
            </p>
            <p className="lg:py-3 py-1 text-white text-[16px] w-[97%] lg:text-2xl lg:w-[85%]">
              Your journey is unique, and every step is a victory.{' '}
            </p>
            <p className="lg:py-3 py-1 text-white text-[16px] w-[97%] lg:text-2xl lg:w-[85%]">
              Inspire your network with your Unmatched story.{' '}
            </p>
            <div className="mt-[2rem]">
              <Link
                onClick={() => scroll()}
                className="bg-secondary rounded-full px-4 lg:py-2 p-1 overflow-hidden text-white lg:text-[20px] text-[15px] font-bold hover:bg-gradient-to-r from-red-500 to-purple-500"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

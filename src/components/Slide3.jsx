// LIBRARY IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';

// LOCAL IMPORTS
import carousel3 from '../assets/images/home/carousel3.png';

export default function Slide3({ scroll }) {
  return (
    <div className="carousel-item relative w-full scroll-smooth">
      <div className="hero  h-[30rem] lg:h-[35rem] max-h-[100%] bg-primary">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={carousel3}
            className="max-w-sm  mx-auto w-[30%] h-[5rem] lg:h-[20rem] shadow-2xl"
          />
          <div className="h-[305px] w-[80%] lg:w-[50rem] sm:h-fit md:justify-start lg:text-start  justify-center text-center ">
            <p className="lg:text-5xl py-1 text-white font-bold text-[25px] lg:text-[20px]]">
              Connect with STEM Voices
            </p>
            <p className="lg:py-1 py-0 text-white text-[16px] w-[97%] lg:text-[21px] lg:w-[85%]">
              Uncover stories of STEM leaders who’ve overcome imposter
              syndrome and fostered a more inclusive STEM community.{' '}
            </p>
            <p className="lg:py-1 py-0 text-white text-[16px] w-[97%] lg:text-[21px] lg:w-[85%]">
              {' '}
              Find strength and inspiration as you navigate your own STEM
              path.{' '}
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

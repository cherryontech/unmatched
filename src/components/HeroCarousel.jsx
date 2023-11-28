// LIBRARY IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

// LOCAL IMPORTS
import carousel1 from '../assets/images/home/carousel1.png';
import carousel2 from '../assets/images/home/carousel2.png';
import carousel3 from '../assets/images/home/carousel3.png';

export default function HeroCarousel({ scroll }) {
  return (
    <div className="carousel w-full mt-[4rem] scroll-smooth ">
      <Carousel
        slideInterval={8000}
        leftControl={
          <ChevronLeftIcon
            className="w-10 text-white"
            style={{ strokeWidth: 3 }}
          />
        }
        rightControl={
          <ChevronRightIcon
            className="w-10 text-white"
            style={{ strokeWidth: 3 }}
          />
        }
      >
        {/* Slide 1 */}
        <div className="carousel-item relative">
          <div className="hero h-[30rem] lg:h-[35rem] max-h-[100%] w-full  bg-primary">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={carousel1}
                className=" rounded-full mx-auto w-[44%] lg:w-[27%] h-[11rem] lg:h-[20rem] shadow-2xl"
              />
              <div className="h-[305px] w-[100%] lg:w-[50rem] md:justify-start justify-center lg:text-start text-center sm:h-fit">
                <p className="lg:text-5xl py-1 text-white font-bold text-[25px] lg:text-[20px]]">
                  End Imposter Syndrome
                </p>
                <p className="lg:py-3 py-1 text-white text-[16px] w-[97%] lg:text-2xl lg:w-[85%]">
                  Every unique perspective adds value to the world of STEM.{' '}
                </p>
                <p className="lg:py-3 py-1 text-white text-[16px] w-[97%] lg:text-2xl lg:w-[85%]">
                  Free yourself from not fitting in and pave the way for your
                  STEM journey.{' '}
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
        {/* Slide 2 */}
        <div className="carousel-item relative w-full scroll-smooth">
          <div className="hero  h-[30rem] lg:h-[38rem] max-h-[100%] bg-primary">
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
        {/* Slide 3 */}
        <div className="carousel-item relative w-full scroll-smooth">
          <div className="hero  h-[30rem] lg:h-[38rem] max-h-[100%] bg-primary">
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
      </Carousel>
    </div>
  );
}

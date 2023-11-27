// LIBRARY IMPORTS
import { useRef } from 'react';
import React from 'react';

// LOCAL IMPORTS
import story from '../assets/images/home/story.jpeg';
import mission from '../assets/images/home/mission.jpeg';
import HeroCarousel from './HeroCarousel';


export default function StoryMission() {
  const firstItem = useRef(null);
  const scroll = () =>{
    firstItem.current.scrollIntoView();
  }
  return (
    <>
    <HeroCarousel scroll = {scroll}/>
    <div className="py-16 lg:py-24  px-16 lg:px-24 w-[90%] object-center m-auto mt-[8rem]" ref={firstItem}>
      <div className="container mx-auto px-6 lg:px-8" >
        <div className="flex flex-wrap justify-between items-start gap-14 mb-[10rem]">
          <div >
            <img className="rounded-2xl border lg:w-[400px] max-w-md mx-auto w-[350px] lg:max-w-lg" src={story} alt="Our Story" />
          </div>
          <div className="flex-1">
            <h2 className="lg:text-3xl text-2xl font-bold text-primary">Our Story</h2>
            <p className="mt-5 text:21px md:text-[22px] lg:text-[23px] text-primary ">
              Unmatched started in 2023 with one purpose: to empower underrepresented STEM (science, technology, engineering, and math) students to overcome imposter syndrome and achieve their dreams.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-start gap-14 mt-14 lg:mt-28 mb-[4rem]">
          <div className="flex-1">
            <h2 className="lg:text-3xl text-2xl font-bold text-primary">Our Mission</h2>
            <p className="mt-5  text:21px md:text-[22px] lg:text-[23px] text-primary">
              We’re dedicated to fostering confidence, motivation, and success in the next generation of STEM leaders. 
            </p>
            <p className="mt-5  text:21px md:text-[22px] lg:text-[23px] text-primary">
            Access relatable and inspiring narratives about STEM professionals who’ve triumphed over imposter syndrome and discover how you can too.
            </p>
          </div>
          <div className="flex-1">
            <img className="rounded-2xl border max-w-md mx-auto w-[350px] lg:w-[400px] lg:max-w-lg" src={mission} alt="Our Mission" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

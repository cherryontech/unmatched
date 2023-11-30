// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import story from '../assets/images/home/story.jpeg';
import mission from '../assets/images/home/mission.jpeg';

export default function StoryMission({ firstItem }) {
  return (
    <div className="flex flex-col gap-10 mb-20 " ref={firstItem}>
      <div className="flex flex-col-reverse lg:flex-row justify-between mt-[9rem] lg:items-start items-center gap-14">
        <div className="flex-1">
          <img
            className="rounded-2xl md:h-80 md:w-screen object-cover"
            src={story}
            alt="Our Story"
          />
        </div>
        <div className="flex-1">
          <h2 className="lg:text-3xl text-2xl font-bold text-primary">
            Our Story
          </h2>
          <p className="mt-5 text:21px md:text-[22px] lg:text-[23px] text-primary ">
            Unmatched started in 2023 with one purpose: to empower
            underrepresented STEM (science, technology, engineering, and math)
            students to overcome imposter syndrome and achieve their dreams.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between lg:items-start items-center gap-14 mt-14 lg:mt-28 mb-[4rem]">
        <div className="flex-1">
          <h2 className="lg:text-3xl text-2xl font-bold text-primary">
            Our Mission
          </h2>
          <p className="mt-5  text:21px md:text-[22px] lg:text-[23px] text-primary">
            We’re dedicated to fostering confidence, motivation, and success in
            the next generation of STEM leaders.
          </p>
          <p className="mt-5  text:21px md:text-[22px] lg:text-[23px] text-primary">
            Access relatable and inspiring narratives about STEM professionals
            who’ve triumphed over imposter syndrome and discover how you can
            too.
          </p>
        </div>
        <div className="flex-1">
          <img
            className="rounded-2xl md:h-80 md:w-screen object-cover"
            src={mission}
            alt="Our Mission"
          />
        </div>
      </div>
    </div>
  );
}

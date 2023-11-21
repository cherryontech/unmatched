// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import story from '../assets/images/home/story.jpeg';
import mission from '../assets/images/home/mission.jpeg';

export default function StoryMission() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-start gap-14">
          <div className="flex-1">
            <img className="rounded-2xl border max-w-md mx-auto lg:max-w-lg" src={story} alt="Our Story" />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-primary">Our Story</h2>
            <p className="mt-5 text-2xl text-primary">
              Unmatched started in 2023 with one purpose: to empower underrepresented STEM (science, technology, engineering, and math) students to overcome imposter syndrome and achieve their dreams.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-start gap-14 mt-14 lg:mt-28">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-primary">Our Mission</h2>
            <p className="mt-5 text-2xl text-primary">
              We’re dedicated to fostering confidence, motivation, and success in the next generation of STEM leaders. Access relatable and inspiring narratives about STEM professionals who’ve triumphed over imposter syndrome and discover how you can too.
            </p>
          </div>
          <div className="flex-1">
            <img className="rounded-2xl border max-w-md mx-auto lg:max-w-lg" src={mission} alt="Our Mission" />
          </div>
        </div>
      </div>
    </div>
  )
}

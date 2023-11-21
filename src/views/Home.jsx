// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import HeroCarousel from '../components/HeroCarousel.jsx';
import StoryMission from '../components/StoryMission.jsx';
import Card from '../components/Card.jsx';

export function Home({ fullDataSet }) {
  return (
    <div className="bg-base-100">
      <HeroCarousel />
      <StoryMission />
      <div className="max-w-[1200px] xl:mx-auto md:mx-28 sm:mx-8">
        <div className="lg:text-4xl text-3xl font-bold md:float-left text-center text-primary px-4">
            Explore Unmatched's Empowering Voices
        </div>
        <Card data={fullDataSet} limit={3} />
      </div>
    </div>
  )
};
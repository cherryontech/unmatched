// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import HeroCarousel from '../components/HeroCarousel.jsx';
import StoryMission from '../components/StoryMission.jsx';

export function Home() {
  return (
    <div className="bg-base-100">
      <HeroCarousel />
      <StoryMission />
    </div>
  )
};
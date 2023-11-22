// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import HeroCarousel from '../components/HeroCarousel.jsx';
import StoryMission from '../components/StoryMission.jsx';
import SingleCard from '../components/SingleCard.jsx';

export function Home({ fullDataSet }) {
  const limitData = []
  for(let i = 0; i<3; i++){
    limitData.push(fullDataSet[i])
  };
  const limitDataCard = limitData.map(data => {
    return (
      <SingleCard
        id={data.id}
        key={data.id}
        image={data.image}
        name={data.fullName}
        body={data.occupation}
      />
    );
  });

  return (
    <div className="bg-base-100">
      <HeroCarousel />
      <StoryMission />
      <div className="max-w-[1200px] xl:mx-auto md:mx-8 sm:mx-8">
        <div className="lg:text-4xl text-3xl font-bold text-center text-primary px-4">
            Explore Unmatched's Empowering Voices
        </div>
        <div className="max-w-[1200px] xl:mx-auto md:mx-28 sm:mx-8">
        <div className="w-full py-[2rem] md:py-[4rem] px-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 md:m-auto sm:grid-cols-1 gap-12 place-items-center m-auto">
        {limitDataCard}
        </div>
        </div>
        </div>
      </div>
    </div>
  )
};
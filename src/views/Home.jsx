// LIBRARY IMPORTS
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

// LOCAL IMPORTS
import HeroCarousel from '../components/HeroCarousel.jsx';
import StoryMission from '../components/StoryMission.jsx';
import SingleCard from '../components/SingleCard.jsx';

export function Home({ fullDataSet, changeVoicesColor, resetData,resetTags }) {
  // HANDLERS & CONSTANTS
  const limitData = [];
  for (let i = 0; i < 3; i++) {
    limitData.push(fullDataSet[i]);
  }

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

  const handleVoiceIconClick = () => {
    resetData();
    changeVoicesColor();
    resetTags();
  };

  const firstItem = useRef(null);
  const scroll = () => {
    firstItem.current.scrollIntoView();
  };

  return (
    <div>
      <HeroCarousel scroll={scroll} />
      <div className=" xl:p-24 w-[90%] object-center m-auto mt-[1rem]">
        <div className="container mx-auto px-6 lg:px-8 ">
          <StoryMission firstItem={firstItem} />
          <section>
            <div className="text-center lg:text-left">
              <h2 className="lg:text-3xl text-2xl font-bold pb-5 mt-[8rem]">
                Explore Unmatched's Empowering Voices
              </h2>
              <div className="mt-7 flex flex-col flex-wrap md:flex-row lg:justify-between md:justify-between justify-center items-center mb-20 gap-y-10 md:mx-16 lg:mx-auto">
                {limitDataCard}
              </div>
            </div>
            <div className="flex justify-center  lg:justify-end">
              <Link
                to="/professionals"
                className="px-4 py-2 my-3 rounded-full font-bold bg-red-500 hover:bg-gradient-to-r from-red-500 to-purple-500  text-white"
                onClick={ handleVoiceIconClick }>
                Unmatched Voices
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

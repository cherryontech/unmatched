// LIBRARY IMPORTS
import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
// LOCAL IMPORTS
import { getRandomCards } from '../utils/randomCards.jsx';
import ResourceCard from '../components/ResourceCard.jsx';
import ProfessionalBio from '../components/ProfessionalBio.jsx';

export const BioPage = ({ fullDataSet }) => {
  const { id } = useParams();
  const currentIndex = fullDataSet.findIndex(
    item => item.id === parseInt(id, 10),
  );

  const randomCards = getRandomCards(currentIndex, fullDataSet);
  const professional = fullDataSet[currentIndex];

  return (
    <>
      <div className="text-primary">
        <div className="h-52 bg-primary w-screen" />
        <div className="mx-auto w-[200px] h-[200px] relative mb-4 ">
        <div className="mx-auto w-[215px] h-[215px]  -mt-28 flex justify-center items-center rounded-full overflow-hidden bg-gradient-to-r from-amber-400 to-cyan-400">
          <img src={professional.image} alt={professional.fullName} className="mx-auto w-[200px] h-[200px] justify-center absolute items-center border-8
            border-white object-cover rounded-full overflow-hidden"/>
        </div>
        </div>
        <div className="text-center mt-2 pb-14">
          <h1 className="text-3xl font-bold">{professional.fullName}</h1>
          <p>{professional.occupation}</p>
        </div>
        <div className="max-w-screen-lg xl:mx-auto md:mx-28 sm:mx-8">
          <ProfessionalBio
            bio={professional.bio}
            name={professional.name}
            fullName={professional.fullName}
          />
          {professional.resources && professional.resources.length > 0 && (
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold">
                {professional.name}'s Suggested Resources
              </h2>
              <div className="flex flex-col flex-wrap md:flex-row lg:justify-between justify-center items-center mb-14">
                {professional.resources.map(item => (
                  <ResourceCard
                    key={item.title}
                    image={item.image}
                    title={item.title}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
          )}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold">More Unmatched Inspiration</h2>
            <div className="flex flex-col flex-wrap md:flex-row lg:justify-between md:justify-between justify-center items-center mb-20">
              {randomCards}
            </div>
          </div>
          <div className="flex justify-end mb-7">
            <Link
              to="/professionals"
              className="px-4 py-2 rounded-full font-bold bg-red-500 hover:bg-red-800 text-white mb-12"
            >
              Back to Resources
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

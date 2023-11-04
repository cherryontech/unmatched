// LIBRARY IMPORTS
import React from 'react';
import { useParams, Link } from 'react-router-dom';
// LOCAL IMPORTS
import { bioData } from '../assets/bioData.js';
import SingleCard from '../components/SingleCard.jsx';
import ResourceCard from '../components/ResourceCard.jsx';

export const BioPage = () => {
  const { id } = useParams();
  const currentIndex = bioData.findIndex(item => item.id === parseInt(id, 10));

  const nextCards = bioData
    .filter(
      (item, index) =>
        index !== currentIndex &&
        index > currentIndex &&
        index < currentIndex + 4,
    )
    .map(item => (
      <SingleCard
        key={item.id}
        id={item.id}
        image={item.image}
        name={item.fullName}
        body={item.occupation}
      />
    ));

  const data = bioData[currentIndex];

  const formatParagraphs = text => {
    return text.split('\n').map((paragraph, index) => (
      <p key={index} className="pb-4 text-lg">
        {paragraph}
      </p>
    ));
  };

  return (
    <>
      <div className="text-primary">
        <div className="h-52 bg-primary w-screen" />
        <div className="mx-auto w-48 h-48 relative -mt-28 border-8 border-white rounded-full overflow-hidden">
          <img src={data.image} alt={data.fullName} />
        </div>
        <div className="text-center mt-2 pb-14">
          <h1 className="text-3xl font-bold">{data.fullName}</h1>
          <p>{data.occupation}</p>
        </div>
        <div className="max-w-screen-lg xl:mx-auto md:mx-28 sm:mx-8">
          <div className="mb-10">
            <div className="pb-4">
              <h3 className="text-2xl font-bold">Who is {data.fullName}?</h3>
              {formatParagraphs(data.bio.summary)}
            </div>
            <div className="pb-4">
              <h3 className="text-2xl font-bold">
                What is {data.name}'s impact?
              </h3>
              {formatParagraphs(data.bio.impact)}
            </div>
            <div className="pb-4">
              <h3 className="text-2xl font-bold">
                How did {data.name} conquer imposter syndrome?
              </h3>
              {formatParagraphs(data.bio.career)}
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold">
              {data.name}'s Suggested Resources
            </h2>
            <div className="flex flex-col flex-wrap md:flex-row lg:justify-between justify-center items-center mb-14">
              {data.resources.map(item => (
                <ResourceCard
                  image={item.image}
                  title={item.title}
                  link={item.link}
                />
              ))}
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold">More Unmatched Inspiration</h2>
            <div className="flex flex-col flex-wrap md:flex-row lg:justify-between md:justify-between justify-center items-center mb-20">
              {nextCards}
            </div>
          </div>
          <div className="flex justify-end mb-7">
            <Link
              to="/professionals"
              className="px-4 py-2 rounded-full font-bold bg-red-500 text-white"
            >
              Back to Resources
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

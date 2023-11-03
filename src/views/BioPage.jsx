// LIBRARY IMPORTS
import React from 'react';
import { useParams } from 'react-router-dom';
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
    <div className="text-primary min-h-screen flex flex-col justify-center items-center mb-20">
      <div>
        <div className="h-52 bg-primary w-screen" />
        <div className="mx-auto w-48 h-48 relative -mt-28 border-8 border-white rounded-full overflow-hidden">
          <img src={data.image} alt={data.fullName} />
        </div>
        <div className="text-center mt-2 pb-14">
          <h1 className="text-3xl font-bold">{data.fullName}</h1>
          <p>{data.occupation}</p>
        </div>
      </div>
      <div className="max-w-screen-lg">
        <div>
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

          <div className="mb-14">
            <h2 className="text-2xl font-bold">
              {data.name}'s Suggested Resources
            </h2>
            <div className="grid md:grid-cols-2">
              {data.resources.map(item => (
                <ResourceCard
                  image={item.image}
                  title={item.title}
                  link={item.link}
                />
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">More Unmatched Inspiration</h2>
            <div className="grid lg:grid-cols-3">{nextCards}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

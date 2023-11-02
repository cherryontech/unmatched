import React from 'react';
import { useParams } from 'react-router-dom';
import { bioData } from '../assets/bioData.js';

export const BioPage = () => {
  const { id } = useParams();
  const data = bioData.find(item => item.id === parseInt(id, 10));

  return (
    <>
      <div>
        <div class="h-40 overflow-hidden bg-[#0B2E50]"></div>
        <div class="mx-auto w-44 h-44 relative -mt-16 border-8 border-white rounded-full overflow-hidden">
          <img src={data.image} alt={data.fullName} />
        </div>
        <div class="text-center mt-2">
          <h2 class="text-3xl font-bold">{data.fullName}</h2>
          <p class="text-gray-500">{data.occupation}</p>
        </div>
      </div>

      <section>
        <h3 className="text-xl font-bold">Who is {data.fullName}?</h3>
        <p>{data.bio.summary}</p>
        <h3 className="text-xl font-bold">What is {data.name}'s impact?</h3>
        <p>{data.bio.impact}</p>
        <h3 className="text-xl font-bold">
          How did {data.name} conquer imposter syndrome?
        </h3>
        <p>{data.bio.career}</p>
      </section>
    </>
  );
};

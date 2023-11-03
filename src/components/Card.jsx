// LIBRARY IMPORTS
import React, { useState } from 'react';

// LOCAL IMPORTS
import SingleCard from './SingleCard';

const Card = ({ data, setData }) => {
  // const[profile, setProfile] = useState(data)
  const details = data.map(detail => {
    return (
      <SingleCard
        id={detail.id}
        key={detail.id}
        image={detail.image}
        name={detail.fullName}
        body={detail.occupation}
      />
    );
  });
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex items-center justify-center mt-4">
        <button className="bg-white-100 text-[#0A2E50] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-[20px] dark:bg-gray-700 dark:text-blue-400 border border-[#0A2E50] p-3">
          LGBTQ+
        </button>
        <button className="bg-white-100 text-[#0A2E50] text-xs font-medium mr-2 px-2.5 py-0.5  rounded-[20px] dark:bg-gray-700 dark:text-gray-400 border border-[#0A2E50] p-3">
          WOMEN
        </button>
        <button className="bg-white-100 text-[#0A2E50] text-xs font-medium mr-2 px-2.5 py-0.5  rounded-[20px] dark:bg-gray-700 dark:text-red-400 border border-[#0A2E50] p-3">
          BLACK
        </button>
        <button className="bg-white-100 text-[#0A2E50] text-xs font-medium mr-2 px-2.5 py-0.5  rounded-[20px] dark:bg-gray-700 dark:text-green-400 border border-[#0A2E50] p-3">
          ASIAN
        </button>
        <button className="bg-yewhite-100 text-[#0A2E50] text-xs font-medium mr-2 px-2.5 py-0.5  rounded-[20px] dark:bg-gray-700 dark:text-yellow-300 border border-[#0A2E50] p-3">
          DISABILITY
        </button>
        <button className="bg-white-100 text-[#0A2E50] text-xs font-medium mr-2 px-2.5 py-0.5  rounded-[20px] dark:bg-gray-700 dark:text-purple-400 border border-[#0A2E50] p-3">
          LATIN
        </button>
        <button className="bg-white-100 text-[#0A2E50] text-xs font-medium mr-2 px-2.5 py-0.5  rounded-[20px] dark:bg-gray-700 dark:text-pink-400 border border-[#0A2E50] p-3">
          IMMIGRANT
        </button>
      </div>
      <div className="flex flex-col items-center my-10 mx-8">
        <div className="grid grid-cols-1 lg:gap-x-14 lg:gap-y-8 md:gap-x-10 md:gap-y-4 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {details}
        </div>
      </div>
    </div>
  );
};
export default Card;

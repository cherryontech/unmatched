import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

function ResourceCard({ image, title, link }) {
  return (
    <div className="relative w-[20rem] h-[25rem] p-7 md:w-[23rem] md:h-[25rem] xl:w-[29rem] rounded-2xl border-2 border-primary shadow-xl flex-col justify-start items-start hover:scale-95 duration-300">
      <img
        className="object-cover h-52 w-full rounded-2xl"
        src={image}
        alt={title}
      />
      <div className="py-2.5 text-primary text-left text-lg font-bold">
        {title}
      </div>
      <Link to={link} target="_blank">
        <button className="absolute bottom-6 right-7 w-[9rem] text-base font-bold rounded-3xl p-1 text-white bg-purple-500  hover:text-[#0A2E50] hover:shadow-[4.0px_4.0px_4.0px_rgba(0,0,0,0.38)] flex items-center justify-evenly transition duration-300 ease-in-out">
          <span>Open Resource</span>
          <ArrowTopRightOnSquareIcon
            className="w-4"
            style={{ strokeWidth: 3 }}
          />
        </button>
      </Link>
    </div>
  );
}

export default ResourceCard;

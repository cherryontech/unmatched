import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

function ResourceCard({ image, title, link }) {
  return (
    <div className="h-106 w-[24rem] xl:w-[30rem] border-2 shadow-xl flex flex-col p-6 my-2 rounded-[13px] hover:scale-105 duration-300">
      <img
        className="object-cover h-52 bg-white rounded-[13px]"
        src={image}
        alt={title}
      />
      <h2 className="text-primary font-bold text-left pt-2">{title}</h2>
      <Link to={link} target="_blank">
        <button className="bg-[#A855F7] rounded-[15px] text-xs font-semibold text-white mt-5 mx-auto mr-0 p-2
        hover:bg-purple-950 flex items-center">
          <span className="pr-1">Open Resource</span>
          <ArrowTopRightOnSquareIcon
            className="w-4"
            style={{ strokeWidth: 2 }}
          />
        </button>
      </Link>
    </div>
  );
}

export default ResourceCard;

import React from 'react';
import { Link } from 'react-router-dom';

function ResourceCard({ image, title, link }) {
  return (
    <div className="h-106 w-[27rem] border-2 shadow-xl flex flex-col p-6 my-2 rounded-[13px] hover:scale-105 duration-300">
      <img
        className="object-cover h-52 bg-white rounded-[13px]"
        src={image}
        alt={title}
      />
      <h2 className="text-primary font-bold text-left pt-2">{title}</h2>
      <Link to={link}>
        <button className="bg-[#A855F7] w-[100px] rounded-[15px] text-xs font-semibold text-white mt-6 float-right mx-auto mr-0 p-1">
          Open Resource
        </button>
      </Link>
    </div>
  );
}

export default ResourceCard;

import React from 'react';
import { Link } from 'react-router-dom';

function SingleCard({ image, name, body, id }) {
  return (
    <div className="h-106 w-64 xl:w-72 border-2 shadow-xl flex flex-col p-6 my-2 rounded-[13px] hover:scale-105 duration-300">
      <img
        className="object-cover h-52 bg-white rounded-[13px]"
        src={image}
        alt={name}
      />
      <h2 className="text-xl text-primary font-bold text-left pt-2">{name}</h2>
      <p className="text-primary text-left">{body}</p>
      <Link to={`/professionals/${id}/${name}`}>
        <button className="bg-[#A855F7] w-[100px] rounded-[15px] text-xs font-semibold text-white mt-6 float-right mx-auto mr-0 p-1">
          Learn More
        </button>
      </Link>
    </div>
  );
}

export default SingleCard;

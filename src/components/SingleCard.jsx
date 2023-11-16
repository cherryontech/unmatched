import React from 'react';
import { Link } from 'react-router-dom';

function SingleCard({ image, name, body, id }) {
  return (
    <div className="relative w-[20rem] h-[24rem] md:w-[15rem] md:h-[21rem] xl:w-[19rem] xl:h-[24rem] p-7 rounded-2xl border-2 border-primary shadow-xl flex-col justify-start items-start hover:scale-95 duration-300">
      <img
        className="object-cover h-52 xl:h-52 md:h-40 w-full rounded-2xl"
        src={image}
        alt={name}
      />
      <div className="pt-2.5 text-primary text-left">
        <div className="text-lg font-bold">{name}</div>
        <div>{body}</div>
      </div>
      <Link to={`/professionals/${id}/${name}`}>
        <button className="absolute bottom-6 right-7 w-[7rem] text-sm font-bold rounded-3xl p-1 text-white bg-purple-500 hover:bg-purple-950 flex items-center justify-evenly transition duration-300 ease-in-out">
          Learn More
        </button>
      </Link>
    </div>
  );
}

export default SingleCard;

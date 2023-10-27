
import { useState } from 'react'
import SingleCard from './SingleCard';
import { data } from "../assets/BioData.js";



const Card = (props) => {
  const[profile, setProfile] = useState(data)
  const details = profile.map((detail)=>{
    return(<SingleCard id = {detail.id} key = {detail.id} image={detail.image} name = {detail.name} body = {detail.body}/>)
  }

  )
  return (
    <>
    <div className="w-full py-[10rem] px-4 bg-white ">
      <div className="max-w-[1040px] grid md:grid-cols-3 gap-12 place-items-center m-auto  ">
        {details}
      </div>
    </div>
   </>
  );
};
export default Card;

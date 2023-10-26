
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
    <h1 className='text-[30px] font-bold text-center mt-12'>You are in good company</h1>
    <div className="form-control w-full m-auto max-w-xs mt-2">
  <label className="label">
    
    <span className="label-text-alt flex items-start">Search for Resources</span>
  </label>
  <input type="text" placeholder="What can we help you find" className="input input-bordered w-full max-w-xs flex items-center" />
  
  <label className="label">
    <span className="label-text-alt">Bottom Left label</span>
    <span className="label-text-alt">Bottom Right label</span>
  </label>
</div>
    <div className="w-full py-[10rem] px-4 bg-white ">
      <div className="max-w-[1040px] grid md:grid-cols-3 gap-12 place-items-center m-auto  ">
        {details}
      </div>
    </div>
   </>
  );
};
export default Card;

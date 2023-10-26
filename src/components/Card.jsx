
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
    <form className=" w-full m-auto max-w-lg mt-2 relative">
  <label className="label">
    
    <span className="label-text-alt flex items-start">Search for Resources</span>
  </label>
  <div className='relative'>

  <input type="text" placeholder="Who can we help you find" className="input input-bordered w-[1200px] p-4 rounded-xl max-w-lg flex items-center font-bold text-black" />
  <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 '>
  <svg className="w-4 h-4 text-black-500 dark:text-black-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
  </button>
  </div>
  
</form>
    <div className="w-full py-[10rem] px-4 bg-white ">
      <div className="max-w-[1040px] grid md:grid-cols-3 gap-12 place-items-center m-auto  ">
        {details}
      </div>
    </div>
   </>
  );
};
export default Card;

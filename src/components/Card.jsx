
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
    
    <span className="label-text-alt flex items-start text-[#0A2E50] font-bold">Search for Resources</span>
  </label>
  <div className='relative'>

  <input type="text" placeholder="Who can we help you find" className="input input-bordered w-[1200px] p-4 rounded-xl max-w-lg flex items-center font-bold text-[#0A2E50]" />
  <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 '>
  <svg className="w-4 h-4 text-black-500 dark:text-black-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
  </button>
  </div>
  
</form>
<div className='flex items-center justify-center mt-4 m-auto'>

<button  className="bg-white-100 text-[#0A2E50] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-[20px] dark:bg-gray-700 dark:text-blue-400 border border-[#0A2E50] p-3">LGBTQ+</button>
<button  className="bg-white-100 text-[#0A2E50] text-xs font-medium mr-2 px-2.5 py-0.5  rounded-[20px] dark:bg-gray-700 dark:text-gray-400 border border-[#0A2E50] p-3">WOMEN</button>
<button  className="bg-white-100 text-[#0A2E50] text-xs font-medium mr-2 px-2.5 py-0.5  rounded-[20px] dark:bg-gray-700 dark:text-red-400 border border-[#0A2E50] p-3">BLACK</button>
<button  className="bg-white-100 text-[#0A2E50] text-xs font-medium mr-2 px-2.5 py-0.5  rounded-[20px] dark:bg-gray-700 dark:text-green-400 border border-[#0A2E50] p-3">ASIAN</button>
<button  className="bg-yewhite-100 text-[#0A2E50] text-xs font-medium mr-2 px-2.5 py-0.5  rounded-[20px] dark:bg-gray-700 dark:text-yellow-300 border border-[#0A2E50] p-3">DISABILITY</button>
<button  className="bg-white-100 text-[#0A2E50] text-xs font-medium mr-2 px-2.5 py-0.5  rounded-[20px] dark:bg-gray-700 dark:text-purple-400 border border-[#0A2E50] p-3">LATIN</button>
<button  className="bg-white-100 text-[#0A2E50] text-xs font-medium mr-2 px-2.5 py-0.5  rounded-[20px] dark:bg-gray-700 dark:text-pink-400 border border-[#0A2E50] p-3">IMMIGRANT</button>

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

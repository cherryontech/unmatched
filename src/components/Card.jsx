// LIBRARY IMPORTS
import React, { useState } from 'react';

// LOCAL IMPORTS
import SingleCard from './SingleCard';

import Button from './Button';

const buttons = [{id:1, name:'LGBTQ+', clicked:false}, {id:2, name:'WOMEN', clicked:false}, {id:3, name:'BLACK', clicked:false},
{id:4,name:'ASIAN', clicked:false}, {id:5,name:'DISABILITY', clicked:false}, {id:6, name:'LATIN', clicked:false}, {id:7, name:'IMMIGRANT', clicked:false}];


const Card = ({ data, setData }) => {
 
 
  const[tags, setTags] = useState(buttons);
 
  const changeButtonColor =(id)=>{
    const isClicked = buttons.map((button)=>{
      if(button.id === id){
        return {...button, clicked:true}
      }
      else{
        return button
      }
    }

    )
    setTags(isClicked);
    }
  
 
    const details = data.map((detail)=>{
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
  const buttonTags = tags.map((button)=>{
  return(
  <Button name = {button.name} id={button.id} key={button.id} changeButtonColor={changeButtonColor} 
  clicked = {button.clicked}/>
  )
});

  return (
    <>
    {/* <h1 className='text-[30px] font-bold text-center mt-12 text-[#0A2E50]'>You are in good company</h1>
    <div className=' text-[#0A2E50] text-center max-w-[500px] m-auto mt-4'>You dont have to feel like a fraud anymore. 
    Learn from STEM leaders who overcame imposter syndrome and emerged as trailblazers. Get empowered to do the same.</div> */}
    {/* <form className=" w-full m-auto max-w-lg mt-11 relative ">
  <label className="label">
    
    <span className="label-text-alt flex items-start text-[#0A2E50] font-bold">Who can we help you find?</span>
  </label>
  <div className='relative'>

  <input type="text" placeholder="Search by name" className="input input-bordered w-[1200px] p-4 rounded-xl max-w-lg flex items-center font-bold text-[#0A2E50]" />
  <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 '>
  <svg className="w-4 h-4 text-black-500 dark:text-black-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
  </button>
  </div>
   */}
{/* </form> */}
<div className='flex items-center justify-center mt-4 m-auto'>
  
    {buttonTags}
  
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

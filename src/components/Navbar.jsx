// LIBRARY IMPORTS
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// LOCAL IMPORTS

export default function NavBar() {
  const clicked = {clickedVoiceIcon:false, clickedAboutIcon:false}
  
  const [iconClick, seticonClick] = useState(clicked )

  const voiceIconColor = iconClick.clickedVoiceIcon? 'md:bg-gradient-to-r from-red-500 to-purple-500 ' : ' bg-red-500';
  const aboutIconColor = iconClick.clickedAboutIcon? 'md:border-b-4 border-b-[#0A2E50] ' : '';
  
  const changeVoicesColor = ()=>{
    const isClicked = {...clicked, clickedVoiceIcon:true}
    seticonClick(isClicked);
    
  }

  const ChangeAboutIcon = () =>{
    const isClicked = {...clicked, clickedAboutIcon:true}
    seticonClick(isClicked);
  }
  
  return (
    <div className="space-x-4">
      <NavLink
        exact
        to="/"
        onClick={ChangeAboutIcon }
        className={`text-primary font-bold  ${aboutIconColor}  flex-col justify-start text-[2.0vh] items-center inline-flex relative group`}
      >
        <span className="text-center font-bold md:group-hover:opacity-100 ">
          About Us
        </span>
        <span className="w-full md:h-1 h-[3px]  top-5 md:top-full bg-primary rounded-2xl absolute bottom-0 md:opacity-0 transition-opacity duration-300 ease-in-out opacity-100 md:group-hover:opacity-100" />
      </NavLink>
      <NavLink
       to="/professionals"
       onClick={changeVoicesColor}
        className="text-primary font-bold flex-col justify-start items-center inline-flex relative text-[2.0vh]"
      >
        <span className={`md:px-4 md:py-1 ${voiceIconColor}  bg-white rounded-full md:bg-red-500 md:text-white md:hover:bg-gradient-to-r from-red-500 to-purple-500 text-center font-bold`}>
          Unmatched Voices
        </span>
        <span className="w-full md:h-1 h-[3px] top-5 md:top-full bg-primary rounded-2xl absolute bottom-0 md:opacity-0 transition-opacity duration-300 ease-in-out opacity-100 md:group-hover:opacity-100" />
      </NavLink>
     
    </div>
  )
};


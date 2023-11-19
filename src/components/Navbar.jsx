// LIBRARY IMPORTS
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// LOCAL IMPORTS

export default function NavBar() {
  const clicked = {clickedVoiceIcon:false, clickedAboutIcon:false}
  
  const [iconClick, seticonClick] = useState(clicked )

  const voiceIconColor = iconClick.clickedVoiceIcon? 'bg-gradient-to-r from-red-500 to-purple-500 ' : ' bg-red-500';
  const aboutIconColor = iconClick.clickedAboutIcon? 'border-b-4 border-b-[#0A2E50] ' : '';

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
      className={` nav mx-4 bg-base-100 px-3 text-primary  hover:border-b-4 border-b-[#0A2E50] ${aboutIconColor} font-bold text-[2.1vh] `}>
        About Us
      </NavLink>
      <NavLink
      to="/professionals"
      onClick={changeVoicesColor}
      className={` nav px-4 py-[8px] rounded-full font-bold ${voiceIconColor} text-white text-[2.1vh] hover:bg-gradient-to-r from-red-500 to-purple-500 `}>
        Unmatched Voices
      </NavLink>
    </div>
  )
};


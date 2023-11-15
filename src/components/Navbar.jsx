// LIBRARY IMPORTS
import React from 'react';
import { NavLink } from 'react-router-dom';

// LOCAL IMPORTS

export default function NavBar() {
  return (
    <div className="space-x-4">
      <NavLink
      exact
      to="/"
      className="mx-4 bg-base-100 text-primary hover:border-b-4 border-b-[#0A2E50] font-bold text-[19px]">
        About Us
      </NavLink>
      <NavLink
      to="/professionals"
      className="px-4 py-[8px] rounded-full font-bold bg-red-500 text-white text-[19px] hover:bg-gradient-to-r from-red-500 to-purple-500 ">
        Unmatched Voices
      </NavLink>
    </div>
  )
};


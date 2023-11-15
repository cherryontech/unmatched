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
      className="px-4 py-2 bg-base-100 text-primary rounded-full font-bold text-[19px]">
        About Us
      </NavLink>
      <NavLink
      to="/professionals"
      className="px-4 py-[8px] rounded-full font-bold bg-red-500 text-white text-[19px]">
        Unmatched Voices
      </NavLink>
    </div>
  )
};


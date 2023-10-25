// LIBRARY IMPORTS
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

// LOCAL IMPORTS
import NavBar from '../components/NavBar.jsx';
import logo from '../assets/logo.png';

export function Layout() {
  return (
    <div className="flex flex-col w-full h-full min-h-screen">
      <div className="p-4 w-full border-b-4 border-accent">
        <div className="flex justify-between items-center mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Your Logo" className="h-10" />
          </div>

          {/* Navigation */}
          <div className="space-x-4">
            <button className="btn btn-secondary">About Us</button>
            <button className="btn btn-secondary">Resources</button>
          </div>
        </div>
      </div>
      <main className="flex-1 flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  )
};

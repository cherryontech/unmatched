// LIBRARY IMPORTS
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

// LOCAL IMPORTS
import NavBar from '../components/Navbar';
import logo from '../assets/logo.png';


export function Layout() {
  return (
    <div className="flex flex-col w-full h-full min-h-screen">
      <div className="p-4 w-full">
        <div className="flex justify-between items-center mx-auto">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Your Logo" className="h-10" />
            </Link>
          </div>
          <NavBar/>
        </div>
      </div>
      <main className="flex-1 flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  )
};

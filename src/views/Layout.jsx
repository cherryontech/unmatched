// LIBRARY IMPORTS
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

// LOCAL IMPORTS
import NavBar from '../components/Navbar';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';

export function Layout({
  ChangeAboutIcon,
  changeVoicesColor,
  iconClick,
  resetData,
  resetTags,
}) {
  return (
    <div className="flex flex-col w-full h-full min-h-screen ">
      <div className="py-6 px-2 md:px-5 w-full sticky bg-white z-40 top-0">
        <div className="flex justify-between items-center mx-auto">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={logo}
                alt="Your Logo"
                className="h-6 md:h-10 hover:scale-105 duration-300"
              />
            </Link>
          </div>
          <NavBar
            ChangeAboutIcon={ChangeAboutIcon}
            changeVoicesColor={changeVoicesColor}
            iconClick={iconClick}
            resetData={resetData}
            resetTags={resetTags}
          />
        </div>
      </div>
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

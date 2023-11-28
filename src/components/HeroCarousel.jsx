// LIBRARY IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

// LOCAL IMPORTS
import Slide1 from './Slide1.jsx';
import Slide2 from './Slide2.jsx';
import Slide3 from './Slide3.jsx';

export default function HeroCarousel({ scroll }) {
  return (
    <div className="carousel w-full scroll-smooth">
      <Carousel
        slideInterval={8000}
        leftControl={
          <ChevronLeftIcon
            className="w-10 text-white"
            style={{ strokeWidth: 3 }}
          />
        }
        rightControl={
          <ChevronRightIcon
            className="w-10 text-white"
            style={{ strokeWidth: 3 }}
          />
        }
      >
        <Slide1 scroll = {scroll} />
        <Slide2 scroll = {scroll} />
        <Slide3 scroll = {scroll} />
      </Carousel>
    </div>
  );
}

// LIBRARY IMPORTS
import React, { useState } from 'react';
import { Carousel } from 'flowbite-react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

// LOCAL IMPORTS
import Slide1 from './Slide1.jsx';
import Slide2 from './Slide2.jsx';
import Slide3 from './Slide3.jsx';

const customTheme = {
  scrollContainer: {
    base: 'flex h-full scroll-smooth',
    snap: 'snap-x',
  },
  control: {
    base: 'hidden',
    icon: 'hidden',
  },
  indicators: {
    active: {
      off: 'hover:bg-primary bg-stone-300 ease-in-out duration-300',
      on: 'bg-primary',
    },
    base: 'h-3 w-3 rounded-full',
    wrapper: 'absolute -bottom-13 py-4 flex justify-center gap-3 w-full',
  },
};

export default function HeroCarousel({ scroll }) {
  const [activeControl, setActiveControl] = useState(0);
  const handleSlideChange = index => {
    setActiveControl(index);
  };

  return (
    <div className="xl:h-[33rem] lg:h-[30rem] md:h-[28rem] h-[25rem] w-full bg-primary">
      <Carousel
        theme={customTheme}
        slideInterval={8000}
        onSlideChange={handleSlideChange}
        leftControl={
          activeControl !== 0 && (
            <ChevronLeftIcon
              className="w-10 text-white hidden lg:block"
              style={{ strokeWidth: 3 }}
            />
          )
        }
        rightControl={
          activeControl !== 2 && (
            <ChevronRightIcon
              className="w-10 text-white hidden lg:block"
              style={{ strokeWidth: 3 }}
            />
          )
        }
      >
        <Slide1 scroll={scroll} />
        <Slide2 scroll={scroll} />
        <Slide3 scroll={scroll} />
      </Carousel>
    </div>
  );
}

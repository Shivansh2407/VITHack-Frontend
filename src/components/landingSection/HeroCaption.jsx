import React from 'react';

// Components
import Bubbles from '../vectors/Bubbles.gif';

const HeroCaption = () => (
  <div className='w-full sm:w-1/3 text-center flex flex-col font-bold relative -mt-8'>
    <img
      src={Bubbles}
      alt='Bubbles'
      className='absolute bottom-0 left-0 -mb-24 md:hidden transform scale-50 -ml-35'
    />
    <h1 className='text-sm-title sm:text-title text-hack-blue uppercase'>
      VIT Hack
    </h1>
    <h3 className='text-sm-sub-heading sm:text-sub-heading text-hack-black capitalize'>
      VIT Vellore, India
    </h3>
  </div>
);

export default HeroCaption;

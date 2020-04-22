import React from 'react';

// Components
// import { ReactComponent as LandingGroup1 } from '../vectors/LandingGroup1.svg';
// import { ReactComponent as LandingGroup2 } from '../vectors/LandingGroup2.svg';
import LandingFooter from './LandingFooter';
import HeroCaption from './HeroCaption';
import { ReactComponent as VitHackLogo } from '../vectors/VitHackLogo.svg';
import LandingGroup1 from '../vectors/LandingGroup1.gif';
import LandingGroup2 from '../vectors/LandingGroup2.gif';

const LandingSection = () => (
  <section
    className='section bg-white h-screen flex flex-col overflow-hidden cursor-default sm:text-base'
    id='home'
  >
    <a
      className='sm:hidden cursor-pointer absolute z-20'
      href='/#home'
      style={{ top: '25px', left: '50%', transform: 'translateX(-50%)' }}
    >
      <VitHackLogo />
    </a>
    <div className='h-full flex justify-center items-center'>
      <div className='w-1/3 hidden md:block'>
        <img src={LandingGroup1} alt='Code Man' className='ml-20' />
        {/* <LandingGroup1 /> */}
      </div>
      <HeroCaption />
      <div className='w-1/3 hidden md:block'>
        <img src={LandingGroup2} alt='Code Man' className='mr-20' />
        {/* <LandingGroup2 /> */}
      </div>
    </div>
    <LandingFooter />
  </section>
);

export default LandingSection;

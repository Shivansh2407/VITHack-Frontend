import React from 'react';

// Components
import { ReactComponent as LandingGroup1 } from '../vectors/LandingGroup1.svg';
import { ReactComponent as LandingGroup2 } from '../vectors/LandingGroup2.svg';
import LandingFooter from './LandingFooter';
import HeroCaption from './HeroCaption';

const LandingSection = () => (
  <section className='section bg-white h-screen flex flex-col overflow-hidden cursor-default'>
    <div className='h-full flex justify-center items-center'>
      <div className='w-1/3'>
        <LandingGroup1 />
      </div>
      <HeroCaption />
      <div className='w-1/3'>
        <LandingGroup2 />
      </div>
    </div>
    <LandingFooter />
  </section>
);

export default LandingSection;

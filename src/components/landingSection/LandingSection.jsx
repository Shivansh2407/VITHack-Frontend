import React from 'react';

// Components
import HeroCaption from './HeroCaption';
import LandingGroup1 from './LandingGroup1';
import LandingGroup2 from './LandingGroup2';
import LandingFooter from './LandingFooter';

const LandingSection = () => (
  <section className='bg-white h-screen w-screen flex flex-col'>
    <div className='h-full flex justify-center items-center'>
      <LandingGroup1 />
      <HeroCaption />
      <LandingGroup2 />
    </div>
    <LandingFooter />
  </section>
);

export default LandingSection;

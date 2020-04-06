import React from 'react';

// Components
import HeroCaption from './HeroCaption';
import { ReactComponent as LandingGroup1 } from '../vectors/LandingGroup1.svg';

const LandingSection = () => (
  <section className='bg-white h-screen w-screen flex justify-center items-center'>
    <HeroCaption />
  </section>
);

export default LandingSection;

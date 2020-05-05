import React from 'react';

// Components
import LandingFooter from './LandingFooter';
import HeroCaption from './HeroCaption';
import LandingGroup1 from '../vectors/LandingGroup1.gif';
import LandingGroup2 from '../vectors/LandingGroup2.gif';
import { ReactComponent as CodeMan } from '../vectors/codeMan.svg';
import { ReactComponent as RegisterGirl } from '../vectors/registerGirl.svg';

const LandingSection = () => (
  <section
    className='section bg-white h-screen flex flex-col overflow-hidden cursor-default sm:text-base relative'
    id='home'
  >
    <RegisterGirl />
    <div className='h-full flex justify-center items-center'>
      <div className='w-1/3 hidden md:block'>
        <img src={LandingGroup1} alt='Code Man' className='ml-20' />
      </div>
      <HeroCaption />
      <div className='w-1/3 hidden md:block'>
        <img src={LandingGroup2} alt='Code Man' className='mr-20' />
      </div>
    </div>
    <CodeMan />
    <LandingFooter />
  </section>
);

export default LandingSection;

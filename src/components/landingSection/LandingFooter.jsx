import React from 'react';

// Components
import { ReactComponent as GravitasLogo } from '../vectors/graVITas20Logo.svg';
import { ReactComponent as VitLogoBlue } from '../vectors/VitLogoBlue.svg';

const LandingFooter = () => (
  <footer className='w-full h-24 flex flex-col sm:flex-row justify-center items-center absolute bottom-0 text-hack-black z-0 mb-4 sm:m-0'>
    <div className='sm:mr-6 lowercase'>in collaboration with</div>
    <div className='flex justify-center items-center'>
      <a href='http://vit.ac.in' target='_blank' rel='noopener noreferrer'>
        <VitLogoBlue />
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a
        href='https://vit.ac.in/gravitas/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <GravitasLogo />
      </a>
    </div>
  </footer>
);

export default LandingFooter;

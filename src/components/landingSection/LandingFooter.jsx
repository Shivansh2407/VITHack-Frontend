import React from 'react';

// Components
import { ReactComponent as VitLogoBlue } from '../vectors/VitLogoBlue.svg';

const LandingFooter = () => {
  return (
    <footer className='w-full h-32 flex justify-center items-center absolute bottom-0 text-hack-black z-0'>
      <div className='text-lg mr-6'>in collaboration with</div>
      <a href='http://vit.ac.in' target='_blank' rel='noopener noreferrer'>
        <VitLogoBlue />
      </a>
    </footer>
  );
};

export default LandingFooter;

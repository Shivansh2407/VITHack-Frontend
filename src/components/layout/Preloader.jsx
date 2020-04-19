import React, { useEffect, useRef } from 'react';

// Components
import VitHackLogo from './navbar/VitHackLogo';

// Utility functions
import animatePreloader from '../../utils/animatePreloader';

const Preloader = () => {
  const preLoaderScreen = useRef(null);
  const logo = useRef(null);

  useEffect(() => {
    animatePreloader(preLoaderScreen, logo);
  }, []);

  return (
    <>
      <div
        className='w-screen h-screen fixed inset-0 bg-white z-20 flex justify-center items-center text-base'
        ref={preLoaderScreen}
      />
      <a
        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
        className='cursor-pointer absolute z-30'
        href='/#home'
        ref={logo}
      >
        <VitHackLogo />
      </a>
    </>
  );
};

export default Preloader;

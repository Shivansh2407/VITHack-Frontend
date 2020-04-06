import React from 'react';

// Components
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import LinkedinIcon from './LinkedinIcon';

const SocialTray = () => {
  return (
    <div className='flex justify-start items-center w-full pl-35'>
      <FacebookIcon />
      <InstagramIcon />
      <LinkedinIcon />
    </div>
  );
};

export default SocialTray;

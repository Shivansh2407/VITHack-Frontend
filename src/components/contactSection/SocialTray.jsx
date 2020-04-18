import React from 'react';

// Components
import { ReactComponent as InstagramIcon } from '../vectors/InstagramLogo.svg';
import { ReactComponent as FacebookIcon } from '../vectors/FacebookLogo.svg';
import { ReactComponent as LinkedinIcon } from '../vectors/LinkedinLogo.svg';

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

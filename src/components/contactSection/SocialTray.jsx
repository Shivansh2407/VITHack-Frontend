import React from 'react';

// Components
import { ReactComponent as InstagramIcon } from '../vectors/InstagramLogo.svg';
import { ReactComponent as FacebookIcon } from '../vectors/FacebookLogo.svg';
import { ReactComponent as LinkedinIcon } from '../vectors/LinkedinLogo.svg';

const SocialTray = () => {
  return (
    <div className='flex justify-start items-center w-full pl-8 sm:pl-35'>
      <a
        href='https://facebook.com/vithack19/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FacebookIcon />
      </a>
      <a
        href='https://www.instagram.com/vithack2020/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <InstagramIcon />
      </a>
      <a
        href='https://www.linkedin.com/company/hackvit'
        target='_blank'
        rel='noopener noreferrer'
      >
        <LinkedinIcon />
      </a>
    </div>
  );
};

export default SocialTray;

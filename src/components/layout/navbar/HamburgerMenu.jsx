import React, { useState } from 'react';
import { HamburgerVortex } from 'react-animated-burgers';

// DATA
import { NAV_LINKS } from '../../../DataStore';

const HamburgerMenu = () => {
  const [isActive, setActive] = useState(false);

  return (
    <nav className='block sm:hidden fixed top-0 left-0 z-20 focus:outline-none'>
      <div
        className={`fixed inset-0 h-screen w-screen bg-white flex flex-col justify-center items-center ${
          isActive ? 'block my-4' : 'hidden'
        }`}
      >
        {NAV_LINKS.map((navLink) => {
          if (navLink.text === 'Blog') {
            return (
              <a
                className='hover:text-hack-blue cursor-pointer capitalise my-4'
                data-menuanchor={navLink.anchor}
                href={navLink.url}
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => setActive(!isActive)}
              >
                {navLink.text}
              </a>
            );
          }

          return (
            <a
              className={`capitalise my-4 ${
                navLink.text === 'Tracks'
                  ? 'cursor-not-allowed opacity-50'
                  : 'cursor-pointer hover:text-hack-blue'
              }`}
              data-menuanchor={navLink.anchor}
              href={navLink.url}
              onClick={() => setActive(!isActive)}
            >
              {navLink.text}
            </a>
          );
        })}
      </div>
      <div className='z-30'>
        <HamburgerVortex
          isActive={isActive}
          toggleButton={() => setActive(!isActive)}
          buttonColor='none'
          barColor='black'
        />
      </div>
    </nav>
  );
};

export default HamburgerMenu;

import React, { useState, useEffect } from 'react';

// Components
import { ReactComponent as VitHackLogo } from '../../vectors/VitHackLogo.svg';
import NavLink from './NavLink';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(
    document.documentElement.scrollTop
  );

  const navLinks = [
    { id: 1, text: 'Blog', url: '/#' },
    // { id: 2, text: 'Help us Out', url: '#' },
    // { id: 3, text: 'Tracks', url: '#' },
    { id: 4, text: 'Contact Us', url: '/#contact-us' },
  ];

  useEffect(() =>
    window.addEventListener('scroll', () =>
      setScrollPosition(document.documentElement.scrollTop)
    )
  );

  return (
    <nav
      className={`w-full text-center bg-white text-black h-24 flex justify-center items-center fixed top-0 z-10 ${
        scrollPosition > 10 && 'shadow-lg'
      }`}
    >
      <div className='w-1/3 flex justify-evenly items-center'>
        {navLinks.slice(0, 1).map((navLink) => (
          <div key={navLink.id}>
            <NavLink key={NavLink.id} text={navLink.text} url={navLink.url} />
          </div>
        ))}
      </div>
      <div className='w-1/3 flex justify-center items-center'>
        <a href='/#' className='cursor-pointer'>
          <VitHackLogo />
        </a>
      </div>
      <div className='w-1/3 flex justify-evenly items-center'>
        {navLinks.slice(1).map((navLink) => (
          <div key={navLink.id}>
            <NavLink key={NavLink.id} text={navLink.text} url={navLink.url} />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

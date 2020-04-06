import React from 'react';

// Components
import { ReactComponent as VitHackLogo } from '../../vectors/VitHackLogo.svg';
import NavLink from './NavLink';

const Navbar = () => {
  const navLinks = [
    { id: 1, text: 'Blog', url: '#' },
    { id: 2, text: 'Help us Out', url: '#' },
    { id: 3, text: 'Tracks', url: '#' },
    { id: 4, text: 'Contact Us', url: '#' },
  ];

  return (
    <nav className='w-full text-center bg-white text-black h-24 flex justify-center items-center fixed top-0 justify-evenly z-10'>
      {navLinks.slice(0, 2).map((navLink) => (
        <div key={navLink.id}>
          <NavLink key={NavLink.id} text={navLink.text} url={navLink.url} />
        </div>
      ))}
      <div className='cursor-pointer'>
        <a href={process.env.PUBLIC_URL}>
          <VitHackLogo />
        </a>
      </div>

      {navLinks.slice(2).map((navLink) => (
        <div key={navLink.id}>
          <NavLink key={NavLink.id} text={navLink.text} url={navLink.url} />
        </div>
      ))}
    </nav>
  );
};

export default Navbar;

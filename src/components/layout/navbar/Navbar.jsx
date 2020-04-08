import React, { useState, useEffect } from 'react';

// Components
import { ReactComponent as VitHackLogo } from '../../vectors/VitHackLogo.svg';
import NavLink from './NavLink';

const Navbar = () => {
  const [loading, setLoading] = useState(true);

  const navLinks = [
    { id: 1, text: 'Blog', url: '/#' },
    // { id: 2, text: 'Help us Out', url: '#' },
    // { id: 3, text: 'Tracks', url: '#' },
    { id: 4, text: 'Contact Us', url: '#page1' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Preloader starts  */}
      <div
        className={`w-screen h-screen fixed inset-0 bg-white z-20 flex justify-center items-center text-4xl ${
          !loading && 'hidden'
        }`}
      >
        <span className='text-hack-blue'>36</span>&nbsp;Hours,&nbsp;
        <span className='text-hack-yellow'>1</span>&nbsp;Hack,&nbsp;
        <span className='text-hack-pink'>1</span>&nbsp;Networking Session
      </div>
      {/* Preloader ends  */}
      <nav className='w-full text-center bg-white text-black h-24 flex justify-center items-center fixed top-0 z-10 shadow-md'>
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
    </>
  );
};

export default Navbar;

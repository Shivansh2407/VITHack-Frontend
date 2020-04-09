import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Components
import NavLink from './NavLink';

const Navbar = () => {
  const navLinks = [
    { id: 1, text: 'Blog', url: '/#home', anchor: 'home' },
    // { id: 2, text: 'Help us Out', url: '#' },
    // { id: 3, text: 'Tracks', url: '#' },
    { id: 4, text: 'Contact Us', url: '/#contact', anchor: 'contact' },
  ];

  const preLoaderScreen1 = useRef(null);
  const logo = useRef(null);
  const preLoaderScreen2 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(preLoaderScreen1.current, {
      opacity: 0,
      display: 'none',
      duration: 1,
      delay: 3,
    })
      .to(logo.current, { scale: 0.5, top: '47px', duration: 2, delay: 0.5 })
      .to(preLoaderScreen2.current, {
        opacity: 0,
        display: 'none',
        duration: 1,
      });
  }, []);

  return (
    <>
      {/* Preloader starts  */}
      <div
        ref={preLoaderScreen1}
        className='w-screen h-screen fixed inset-0 bg-white z-40 flex justify-center items-center text-4xl'
      >
        <span className='text-hack-blue'>36</span>&nbsp;Hours,&nbsp;
        <span className='text-hack-yellow'>1</span>&nbsp;Hack,&nbsp;
        <span className='text-hack-pink'>1</span>&nbsp;Networking Session
      </div>
      <div
        ref={preLoaderScreen2}
        className='w-screen h-screen fixed inset-0 bg-white z-20 flex justify-center items-center'
      />
      <a
        href='/#'
        ref={logo}
        className='cursor-pointer absolute z-30'
        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
      >
        <img
          ref={logo}
          src={`${process.env.PUBLIC_URL}/assets/images/VitHackLogo.png`}
          alt='Hack Logo'
        />
      </a>
      {/* preLoaderScreen1 ends  */}
      <nav className='w-full text-center bg-white text-black h-24 flex justify-center items-center fixed top-0 z-10 shadow-md'>
        <div className='w-1/3 flex justify-evenly items-center'>
          {navLinks.slice(0, 1).map((navLink) => (
            <div key={navLink.id}>
              <NavLink
                key={NavLink.id}
                text={navLink.text}
                url={navLink.url}
                anchor={navLink.anchor}
              />
            </div>
          ))}
        </div>
        <div className='w-1/3 flex justify-center items-center' />
        <div className='w-1/3 flex justify-evenly items-center'>
          {navLinks.slice(1).map((navLink) => (
            <div key={navLink.id}>
              <NavLink
                key={NavLink.id}
                text={navLink.text}
                url={navLink.url}
                anchor={navLink.anchor}
              />
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { TimelineLite, Back, Elastic } from 'gsap/all';
// import { HamburgerVortex } from 'react-animated-burgers';

// DATA
import { NAV_LINKS } from '../../../DataStore';

const HamburgerMenu = () => {
  const [isActive, setActive] = useState(false);
  const [tl] = useState(new TimelineLite({ paused: true, reversed: true }));

  const layer1 = useRef(null);
  const layer2 = useRef(null);
  const layer3 = useRef(null);

  useEffect(() => {
    tl.to(
      layer1.current,
      0.5,
      {
        attr: { d: 'M15,15 C15,15,20,25,25,25 S35,15,35,15' },
        ease: Elastic.easeIn,
      },
      'start'
    );
    tl.to(
      layer2.current,
      0.5,
      {
        attr: { d: 'M15,35 C15,35,20,25,25,25 S35,35,35,35' },
        ease: Elastic.easeIn,
      },
      'start'
    );
    tl.to(
      layer3.current,
      0.5,
      { scaleX: 0, transformOrigin: '50% 50%', ease: Back.easeIn },
      'start'
    );

    tl.to(
      layer1.current,
      0.1,
      { attr: { d: 'M15,15 C15,15,25,25,25,25 S35,15,35,15' } },
      'end'
    );
    tl.to(
      layer2.current,
      0.1,
      { attr: { d: 'M15,35 C15,35,25,25,25,25 S35,35,35,35' } },
      'end'
    );
  }, [tl]);

  return (
    <nav className='block sm:hidden fixed top-0 left-0 z-30 focus:outline-none'>
      <button
        className='block sm:hidden z-40 fixed'
        style={{ top: '22px', left: '22px', opacity: '0.7' }}
        onClick={() => {
          if (tl.reversed()) tl.play();
          else {
            tl.reverse();
          }
          setActive(!isActive);
        }}
        type='button'
      >
        <svg
          id='burger'
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          width='40px'
          height='40px'
          viewBox='0 0 50 50'
          className='block relative'
        >
          <path
            ref={layer1}
            d='M15,15 C15,15,20,15,25,15 S35,15,35,15'
            fill='none'
            stroke='#474747'
            strokeLinecap='round'
            strokeMiterlimit='10'
            strokeWidth='2px'
          />
          <path
            ref={layer3}
            d='M10,25 L40,25'
            fill='none'
            stroke='#474747'
            strokeLinecap='round'
            strokeMiterlimit='10'
            strokeWidth='2px'
          />
          <path
            ref={layer2}
            d='M15,35 C15,35,20,35,25,35 S35,35,35,35'
            fill='none'
            stroke='#474747'
            strokeLinecap='round'
            strokeMiterlimit='10'
            strokeWidth='2px'
          />
        </svg>
      </button>
      <div
        className={`fixed inset-0 h-screen w-screen bg-white flex flex-col justify-center items-center ${
          isActive ? 'block' : 'hidden'
        }`}
      >
        {window.location.pathname === '/' ? (
          NAV_LINKS.map((navLink) => {
            if (navLink.text === 'Blog') {
              return (
                <a
                  className='hover:text-hack-blue cursor-pointer capitalise my-4'
                  data-menuanchor={navLink.anchor}
                  href={navLink.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={() => {
                    if (tl.reversed()) tl.play();
                    else tl.reverse();
                    setActive(!isActive);
                  }}
                  key={navLink.id}
                >
                  {navLink.text}
                </a>
              );
            }

            return (
              <a
                className='capitalise my-4 cursor-pointer hover:text-hack-blue'
                data-menuanchor={navLink.anchor}
                href={navLink.url}
                onClick={() => {
                  if (tl.reversed()) tl.play();
                  else tl.reverse();
                  setActive(!isActive);
                }}
                key={navLink.id}
              >
                {navLink.text}
              </a>
            );
          })
        ) : (
          <Link to='/'>Home</Link>
        )}
      </div>
    </nav>
  );
};

export default HamburgerMenu;

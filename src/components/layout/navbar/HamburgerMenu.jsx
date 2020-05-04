import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

// DATA
import { NAV_LINKS } from '../../../DataStore';

const HamburgerMenu = () => {
  const [isActive, setActive] = useState(false);

  return (
    <nav className='block sm:hidden fixed top-0 left-0 z-30 focus:outline-none'>
      <button
        className='block sm:hidden z-40 fixed'
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
          right: '16px',
          opacity: '0.7',
        }}
        onClick={() => {
          setActive(!isActive);
        }}
        type='button'
      >
        <svg
          width='7'
          height='30'
          viewBox='0 0 7 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect x='6' width='1' height='30' fill='black' />
          <rect width='1' height='30' fill='black' />
        </svg>
      </button>
      <div
        className={`fixed inset-0 h-screen w-screen bg-white flex flex-col justify-center items-start bg-hack-blue text-white font-bold text-sm-heading px-8 ${
          isActive ? 'block' : 'hidden'
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
                onClick={() => {
                  setActive(!isActive);
                }}
                key={navLink.id}
              >
                {navLink.text}
              </a>
            );
          }

          if (window.location.pathname !== '/')
            return (
              <Link
                className='capitalise my-4 cursor-pointer hover:text-hack-blue'
                to={`/${navLink.url}`}
                onClick={() => {
                  setActive(!isActive);
                }}
                key={navLink.id}
              >
                {navLink.text}
              </Link>
            );

          return (
            <a
              className='capitalise my-4 cursor-pointer hover:text-hack-blue'
              data-menuanchor={navLink.anchor}
              href={navLink.url}
              onClick={() => {
                setActive(!isActive);
              }}
              key={navLink.id}
            >
              {navLink.text}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default HamburgerMenu;

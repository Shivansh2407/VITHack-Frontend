import React from 'react';

// Components
import Preloader from './Preloader';
import NavLink from './NavLink';

// Data
import { NAV_LINKS } from '../../../dataStore';

const Navbar = () => (
  <>
    <Preloader />
    <nav className='w-full text-center bg-white text-black h-20 flex justify-center items-center fixed top-0 z-10 shadow-md'>
      <div className='w-1/3 flex justify-between items-center pl-35'>
        {NAV_LINKS.slice(0, 2).map((navLink) => (
          <div key={navLink.id}>
            <NavLink
              anchor={navLink.anchor}
              text={navLink.text}
              url={navLink.url}
              key={NavLink.id}
            />
          </div>
        ))}
      </div>
      <div className='w-1/3 flex justify-center items-center' />
      <div className='w-1/3 flex justify-between items-center pr-35'>
        {NAV_LINKS.slice(2, 4).map((navLink) => (
          <div key={navLink.id}>
            <NavLink
              anchor={navLink.anchor}
              text={navLink.text}
              url={navLink.url}
              key={NavLink.id}
            />
          </div>
        ))}
      </div>
    </nav>
  </>
);

export default Navbar;

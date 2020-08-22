import React, { useState, useEffect } from 'react'

// Components
import NavLink from './NavLink'

// Data
import { NAV_LINKS } from '../../../DataStore'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', () =>
      window.scrollY > 100 ? setScrolled(true) : setScrolled(false)
    )
  })

  return (
    <>
      <nav
        className={`hidden sm:flex w-full text-center bg-white text-black h-15 sm:h-18 justify-center items-center fixed top-0 z-10 transition duration-500 ease-in-out ${
          scrolled && 'shadow-md'
        }`}
      >
        <div className='w-1/3 flex justify-between items-center hidden sm:flex -mr-4 md:mr-0 pl-8 md:pl-35'>
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
        <div className='w-1/3 flex justify-between items-center hidden sm:flex -ml-8 md:ml-0  pr-8 md:pr-35'>
          {NAV_LINKS.slice(2, 4).map((navLink) => (
            <div key={navLink.id}>
              <NavLink text={navLink.text} url={navLink.url} />
            </div>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Navbar

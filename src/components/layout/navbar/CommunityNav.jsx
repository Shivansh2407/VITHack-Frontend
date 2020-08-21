import React, { useState, useEffect } from 'react'

// Components
import { ReactComponent as CommunityLogo } from '../../vectors/CommunityLogo.svg'
import { ReactComponent as GravitasLogo } from '../../vectors/graVITas20Logo.svg'
import { ReactComponent as VitLogoBlue } from '../../vectors/VitLogoBlue.svg'
import { ReactComponent as Back } from '../../vectors/Back.svg'

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
        className={`hidden sm:flex w-full text-center bg-white text-black justify-between items-center fixed top-0 z-10 py-4 px-35 transition duration-500 ease-in-out ${
          scrolled && 'shadow-md'
        }`}
      >
        <div className='flex justify-center items-center w-60'>
          <span className='mr-8'>
            <CommunityLogo />
          </span>
          <span className='mr-8 hidden md:block'>
            <VitLogoBlue />
          </span>
          <span className='hidden md:block'>
            <GravitasLogo />
          </span>
        </div>
        <div className='flex justify-center items-center'>
          <a
            href='https://vithack2020.typeform.com/to/gc8sXEi0'
            rel='noopener noreferrer'
            target='_blank'
          >
            <button
              className='block bg-hack-blue hover:bg-blue-600 text-white rounded font-bold capitalize py-2 px-8 cursor-pointer'
              type='button'
            >
              Join Now
            </button>
          </a>
          <a href='/'>
            <div className='flex justify-center items-center ml-8 cursor-pointer'>
              <Back />
              <span className='ml-3'>back to home</span>
            </div>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar

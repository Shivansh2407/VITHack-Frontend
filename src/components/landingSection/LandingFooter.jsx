import React from 'react'

// Components
import { ReactComponent as GravitasLogo } from '../vectors/graVITas20Logo.svg'
import { ReactComponent as VitLogoBlue } from '../vectors/VitLogoBlue.svg'

const LandingFooter = () => (
  <footer className='w-full h-24 flex flex-col sm:flex-row justify-center items-center absolute bottom-0 text-hack-black z-0 mb-20 sm:m-0'>
    <div className='w-full flex justify-center sm:justify-between items-center px-8 sm:px-35'>
      <VitLogoBlue />
      <a
        href='http://gravitas.vit.ac.in'
        target='_blank'
        rel='noopener noreferrer'
        className='text-hack-blue text-sub-heading font-bold hover:underline transform translate-x-5 hidden sm:block'
      >
        GraVITas '20 Website
      </a>
      <span className='sm:hidden'>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <GravitasLogo />
    </div>
  </footer>
)

export default LandingFooter

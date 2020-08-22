import React from 'react'

// Components
import { ReactComponent as GravitasLogo } from '../vectors/graVITas20Logo.svg'
import { ReactComponent as VitLogoBlue } from '../vectors/VitLogoBlue.svg'

const LandingFooter = () => (
  <header className='w-full h-24 hidden sm:block text-hack-black z-0 mt-20 absolute'>
    <div className='w-full flex justify-between items-center px-8 sm:px-35'>
      <span className='hidden sm:block'>
        <VitLogoBlue />
      </span>
      <span className='hidden sm:block'>
        <GravitasLogo />
      </span>
    </div>
  </header>
)

export default LandingFooter

import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// Components
import VitHackLogo from './navbar/VitHackLogo'

// Utility functions
import animatePreloader from '../../utils/animatePreloader'

const Preloader = () => {
  const preLoaderScreen = useRef(null)
  const logo = useRef(null)

  const handleClick = () => {
    if (window.location.pathname === '/') window.scrollTo(0, 0)
  }

  useEffect(() => {
    animatePreloader(preLoaderScreen, logo)
  }, [])

  return (
    <>
      <div
        className={`w-full h-screen fixed inset-0 bg-white z-30 flex justify-center items-center text-base ${
          window.location.pathname === '/community' && 'hidden'
        }`}
        ref={preLoaderScreen}
      />
      <Link
        style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
        className={`cursor-pointer fixed z-30 ${
          window.location.pathname === '/community' && 'hidden'
        }`}
        to='/'
        onClick={() => handleClick()}
        ref={logo}
      >
        <VitHackLogo />
      </Link>
    </>
  )
}

export default Preloader

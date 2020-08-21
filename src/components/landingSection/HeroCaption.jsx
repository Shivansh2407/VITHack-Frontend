import React from 'react'

import Typewriter from 'typewriter-effect'

const HeroCaption = () => (
  <div className='w-full sm:w-1/3 text-center flex flex-col justify-center items-center font-bold relative -mt-8'>
    <h1 className='text-sm-title sm:text-title text-hack-blue uppercase'>
      VIT Hack
    </h1>
    <h3 className='text-sm-sub-heading sm:text-sub-heading text-hack-blue capitalize mb-2 md:mb-5'>
      October 9<sup>th</sup>-11<sup>th</sup>, 2020
    </h3>
    <h3 className='text-sm-sub-heading sm:text-sub-heading text-hack-black capitalize'>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('VIT Vellore, India')
            .pauseFor(1500)
            .deleteAll()
            .typeString('Now Online')
            .pauseFor(1500)
            .deleteAll()
            .start()
        }}
      />
    </h3>
    <a
      href='https://vithack2020.typeform.com/to/gc8sXEi0'
      rel='noopener noreferrer'
      target='_blank'
    >
      <button
        className='bg-hack-blue hover:bg-blue-600 text-white rounded font-bold capitalize py-2 px-4 sm:px-8 w-48 sm:w-64 mt-6 md:mt-8'
        type='button'
      >
        Join the Community
      </button>
    </a>
  </div>
)

export default HeroCaption

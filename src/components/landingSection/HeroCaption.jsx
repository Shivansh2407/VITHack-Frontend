import React from 'react'

const HeroCaption = () => (
  <div className='w-full sm:w-1/3 text-center flex flex-col font-bold relative -mt-8'>
    <h1 className='text-sm-title sm:text-title text-hack-blue uppercase'>
      VIT Hack
    </h1>
    <h3 className='text-sm-sub-heading sm:text-sub-heading text-hack-black capitalize'>
      VIT Vellore, India
    </h3>
    <br />
    <br />
    <button
      className='hidden sm:block bg-hack-blue hover:bg-blue-600 text-white rounded font-bold capitalize py-2 px-8 opacity-50 cursor-not-allowed'
      type='button'
    >
      Join the Community
    </button>
  </div>
)

export default HeroCaption

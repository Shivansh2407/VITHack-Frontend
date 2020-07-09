import React from 'react'
import { Link } from 'react-router-dom'

const HeroCaption = () => (
  <div className='w-full sm:w-1/3 text-center flex flex-col justify-center items-center font-bold relative -mt-8'>
    <h1 className='text-sm-title sm:text-title text-hack-blue uppercase'>
      VIT Hack
    </h1>
    <h3 className='text-sm-sub-heading sm:text-sub-heading text-hack-black capitalize'>
      VIT Vellore, India
    </h3>
    <br />
    <br />
    <Link to='/community'>
      <button
        className='bg-hack-blue hover:bg-blue-600 text-white rounded font-bold capitalize py-2 px-4 sm:px-8 w-48 sm:w-64'
        type='button'
      >
        Join the Community
      </button>
    </Link>
  </div>
)

export default HeroCaption

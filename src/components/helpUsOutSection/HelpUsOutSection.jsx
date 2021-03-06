import React from 'react'

// Components
import { ReactComponent as SneekPeek } from '../vectors/SneakPeek.svg'
import SubSection from '../layout/SubSection'
import Heading from '../layout/Heading'

// Data
import { HELP_TEXT } from '../../DataStore'

const HelpUsOutSection = () => {
  return (
    <section
      className='section text-hack-black flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default sm:text-base'
      id='help'
      data-aos='fade-up'
    >
      <div className='block w-full h-4 sm:h-24' />
      <div className='flex justify-start items-center'>
        <section className='px-8 sm:px-35 md:pl-35'>
          <Heading>Help Us Out</Heading>
          <SubSection heading={HELP_TEXT.heading} text={HELP_TEXT.text} />
          <div className='flex justify-center sm:justify-start'>
            <a href='/ambassador'>
              <button
                className='bg-hack-blue hover:bg-blue-600 text-white rounded font-bold capitalize py-2 px-8'
                type='button'
              >
                Learn More
              </button>
            </a>
          </div>
        </section>
      </div>
      <div className='w-full h-20 md:h-32' />
      <SneekPeek />
    </section>
  )
}

export default HelpUsOutSection

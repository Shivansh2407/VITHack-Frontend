import React from 'react'

// Components
import SubSection from '../layout/SubSection'
import Heading from '../layout/Heading'
import { ReactComponent as Mobile } from '../vectors/Mobile.svg'
import { ReactComponent as MobileLg } from '../vectors/MobileLg.svg'

// Data
import { ABOUT_HACK_SUB_SECTIONS } from '../../DataStore'
import { Link } from 'react-router-dom'

const AboutHackSection = () => {
  return (
    <section
      className='section text-hack-black flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default sm:text-base'
      id='about'
      data-aos='fade-up'
    >
      <div className='block w-full h-4 sm:h-20' />
      <div className='flex justify-start items-center'>
        <section className='px-8 sm:px-35 md:pl-35'>
          <Heading>VIT Hack Community</Heading>
          {ABOUT_HACK_SUB_SECTIONS.map((subSection) => (
            <SubSection
              showLess={subSection.showLess}
              heading={subSection.heading}
              text={subSection.text}
              key={subSection.id}
            />
          ))}
          <div className='flex justify-center md:justify-start items-center w-full'>
            <Link to='/community'>
              <button
                className='bg-hack-blue hover:bg-blue-600 text-white rounded font-bold capitalize py-2 px-8'
                type='button'
              >
                Learn More
              </button>
            </Link>
          </div>
        </section>
      </div>
      <Mobile />
      <MobileLg />
    </section>
  )
}

export default AboutHackSection

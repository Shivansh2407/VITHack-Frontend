import React, { useState } from 'react'

// Components
import SubSection from '../components/layout/SubSection'
import Heading from '../components/layout/Heading'
import Navbar from '../components/layout/navbar/Navbar'
import HamburgerMenu from '../components/layout/navbar/HamburgerMenu'
import { ReactComponent as SeeA } from '../components/vectors/seeA.svg'
import { ReactComponent as Community } from '../components/vectors/Community.svg'
import { ReactComponent as SneakPeak } from '../components/vectors/SneakPeek.svg'

// Data
import { CA_HELP_TEXT, CA_FAQ_SUB_SECTIONS, CA_FAQ } from '../DataStore'

const AmbassadorPage = () => {
  const [active, setActive] = useState(-1)

  return (
    <>
      <HamburgerMenu />
      <Navbar />
      <div className='relative'>
        <section className='section flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default sm:text-base h-screen'>
          <div className='flex flex-col justify-center items-center mb-16'>
            <h1 className='text-hack-blue text-sm-title text-title text-center font-bold px-8'>
              VIT Hack Community
            </h1>
            <button
              className='block bg-hack-blue hover:bg-blue-600 text-white rounded font-bold capitalize py-2 px-8 opacity-50 cursor-not-allowed mt-4'
              type='button'
            >
              Join Now
            </button>
          </div>
          <Community />
        </section>
        <section className='section flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default sm:text-base'></section>
        <section className='section flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default sm:text-base'>
          <div className='hidden sm:block w-screen h-20' />
          <div>
            <section className='px-8 sm:px-35 md:pl-35 relative'>
              <Heading>Campus Ambassador</Heading>
              <p className='w-full md:w-5/12 mb-6 mt-8'>{CA_HELP_TEXT.text}</p>
            </section>
          </div>
        </section>
        <section className='section text-hack-black flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default sm:text-base'>
          <div className='hidden sm:block w-screen h-20' />
          <section className='px-8 sm:px-35 md:pl-35'>
            {CA_FAQ_SUB_SECTIONS.map((subSection) => (
              <SubSection
                heading={subSection.heading}
                text={subSection.text}
                key={subSection.id}
              />
            ))}
            <div className='flex justify-center items-center'>
              <button
                className='bg-hack-blue cursor-not-allowed opacity-50 text-white rounded font-bold capitalize py-2 px-8'
                type='button'
              >
                Coming Soon
              </button>
            </div>
            <SneakPeak />
          </section>
          <header className='text-sm-heading sm:text-heading font-bold w-full px-8 sm:px-35'>
            FAQs
          </header>
          <section className='px-8 sm:px-35 w-full mb-32'>
            {CA_FAQ.map((subSection, index) => (
              <div
                key={subSection.id}
                className='w-full md:w-7/12'
                onClick={() => setActive(index)}
              >
                <h4 className='font-bold mt-8 cursor-pointer'>
                  {subSection.heading}
                </h4>
                <div
                  className={`my-4 ${active === index ? 'block' : 'hidden'}`}
                >
                  {subSection.text}
                </div>
              </div>
            ))}
          </section>
        </section>
        <SeeA />
      </div>
    </>
  )
}

export default AmbassadorPage

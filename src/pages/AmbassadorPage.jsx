import React, { useState } from 'react'

// Components
import Heading from '../components/layout/Heading'
import Navbar from '../components/layout/navbar/Navbar'
import HamburgerMenu from '../components/layout/navbar/HamburgerMenu'
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
          <div className='flex flex-col justify-center items-center md:items-start mb-16 md:w-full md:m-0 md:px-35'>
            <h1 className='text-hack-blue text-sm-title text-title text-center font-bold'>
              VIT Hack Community
            </h1>
            <button
              className='block bg-hack-blue hover:bg-blue-600 text-white rounded font-bold capitalize py-2 px-8 opacity-50 cursor-not-allowed mt-4 md:hidden'
              type='button'
            >
              Join Now
            </button>
            <div className='hidden md:block w-7/12 mt-8'>
              As Indians, we all have a very strong sense of community.
              Communities are essential for research and development. They are
              the guiding light on the path to success. The tech community has
              always been very supportive towards its members. Teaching, helping
              and collaborating on different projects have brought the members,
              even closer. Through VIT Hack, we hope to continue the thread of
              that same sense of community among all its members.
            </div>
          </div>
          <Community />
        </section>
        <section className='section flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default sm:text-base'>
          <div>
            <section className='px-8 sm:px-35 md:pl-35 relative'>
              <Heading>Campus Ambassador</Heading>
              <p className='w-full md:w-5/12 mb-6 mt-8'>{CA_HELP_TEXT.text}</p>
            </section>
          </div>
          <div className='hidden md:block'>
            <SneakPeak />
          </div>
        </section>
        <section className='section text-hack-black flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default sm:text-base'>
          <section className='px-8 sm:px-35 md:pl-35'>
            {CA_FAQ_SUB_SECTIONS.map((subSection) => (
              <div className='w-full md:w-7/12 mb-12' key={subSection.id}>
                <h4 className='text-sm-sub-heading sm:text-sub-heading font-bold'>
                  {subSection.heading}
                </h4>
                <p className='my-4'>{subSection.text}</p>
              </div>
            ))}
            <div className='flex justify-center md:justify-start items-center mb-8'>
              <button
                className='bg-hack-blue cursor-not-allowed opacity-50 text-white rounded font-bold capitalize py-2 px-8'
                type='button'
              >
                Coming Soon
              </button>
            </div>
            <div className='w-full flex justify-center items-center md:hidden'>
              <SneakPeak />
            </div>
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
      </div>
    </>
  )
}

export default AmbassadorPage

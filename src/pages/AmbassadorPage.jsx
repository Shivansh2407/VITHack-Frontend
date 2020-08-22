import React, { useState } from 'react'
import Typewriter from 'typewriter-effect'

// Components
import Heading from '../components/layout/Heading'
import CommunityNav from '../components/layout/navbar/CommunityNav'
import HamburgerMenu from '../components/layout/navbar/HamburgerMenu'
import { ReactComponent as CommunityLg } from '../components/vectors/CommunityLg.svg'
import { ReactComponent as SneakPeak } from '../components/vectors/SneakPeek.svg'
import { ReactComponent as GridMan } from '../components/vectors/GridMan.svg'
import { ReactComponent as CloudLogo } from '../components/vectors/CloudLogo.svg'
import { ReactComponent as GravitasLogo } from '../components/vectors/graVITas20Logo.svg'
import { ReactComponent as VitLogoBlue } from '../components/vectors/VitLogoBlue.svg'

// Data
import { CA_HELP_TEXT, CA_FAQ_SUB_SECTIONS, CA_FAQ } from '../DataStore'

const AmbassadorPage = () => {
  const [active, setActive] = useState(-1)

  return (
    <>
      <HamburgerMenu />
      <div className='relative'>
        <CommunityNav />
        <div className='flex justify-center items-center pt-4 absolute w-full md:hidden'>
          <CloudLogo />
        </div>
        <section className='section flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default sm:text-base h-screen'>
          <div className='flex flex-col justify-center items-center md:items-start mb-16 md:w-full md:m-0 md:px-35 relative'>
            <h1 className='text-hack-blue text-sm-title text-title text-center font-bold px-8 sm:p-0'>
              VIT Hack Community
            </h1>
            <h3 className='text-sm-sub-heading sm:text-sub-heading text-hack-black capitalize md:hidden my-4'>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Talks')
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString('Workshops')
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString('Forums')
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString('Mentorships')
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString('Project Collabs')
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
                className='block bg-hack-blue hover:bg-blue-600 text-white rounded font-bold capitalize py-2 px-8 cursor-pointer mt-4 md:hidden'
                type='button'
              >
                Join Now
              </button>
            </a>

            <div className='hidden md:block w-6/12 mt-8'>
              Communities are essential for research and development. They are
              the guiding light on the path to success. The tech community has
              always been very supportive towards its members. Teaching, helping
              and collaborating on different projects have brought the members,
              even closer. Through VIT Hack, we hope to continue the thread of
              that same sense of community among all its members.
            </div>
            <div className='hidden md:block'>
              <CommunityLg />
            </div>
          </div>
          <div className='absolute bottom-0 flex justify-center items-center mb-20 md:hidden'>
            <VitLogoBlue />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <GravitasLogo />
          </div>
        </section>
        <div className='h-32 w-full' />
        <section className='grid grid-rows-5 md:grid-rows-3 grid-cols-1 md:grid-cols-9 grid-flow-col gap-6 px-8 sm:px-35'>
          <div className='row-span-1 md:row-span-2 col-span-1 md:col-span-5 p-4 md:p-16 bg-hack-green rounded-lg'>
            <h2 className='text-sm-heading sm:text-heading font-bold flex flex-col justify-center items-start mb-4 md:mb-10'>
              Talks
            </h2>
            <div className='sm:text-sm-sub-heading'>
              We all have role models. It’s our dream to follow in the footsteps
              of the people whom we admire. Our partner companies are sending
              some of the best minds on the job, to motivate and inspire the
              participants of this coveted Hackathon. Accompanying these talks
              will be mini-challenges and webinars where the contestants will
              get an opportunity to roll up their sleeves and enhance their
              skills.
            </div>
            <div className='flex'>
              <GridMan />
            </div>
          </div>
          <div className='row-span-1 col-span-1 md:col-span-4 p-4 md:p-16 bg-hack-peach rounded-lg'>
            <h2 className='text-sm-heading sm:text-heading font-bold flex flex-col justify-center items-start mb-4 md:mb-10 text-white'>
              Workshops
            </h2>
            <div className='sm:text-sm-sub-heading text-white'>
              Given the current pandemic situation, we have collaborated with
              the experts to conduct a series of online workshops for the
              participants. These workshops will give the participants a glimpse
              into how the industries are dealing with different issues and get
              ideas about the possible solution to the problem statements.
            </div>
          </div>
          <div className='row-span-1 col-span-1 md:col-span-5 p-4 md:p-16 bg-hack-purple rounded-lg '>
            <h2 className='text-sm-heading sm:text-heading font-bold flex flex-col justify-center items-start mb-4 md:mb-10 text-white'>
              Forums
            </h2>
            <div className='sm:text-sm-sub-heading text-white'>
              Hackathons always provide an opportunity to expand our networks.
              Keeping this trend alive, we have an online forum for queries,
              discussions, and general interaction. We learn more from each
              other and from working in the environment than we do from books
              and classrooms. To accelerate the wheels of the technical minds,
              this forum is going to be the hub of innovation.
            </div>
          </div>
          <div className='row-span-1 col-span-1 md:col-span-4 p-4 md:p-16 bg-hack-pink rounded-lg'>
            <h2 className='text-sm-heading sm:text-heading font-bold flex flex-col justify-center items-start mb-4 md:mb-10 text-white'>
              Mentorships
            </h2>
            <div className='sm:text-sm-sub-heading text-white'>
              We understand that there may be many bright minds who are not
              accustomed to the Hackathon environment, yet. This is the reason
              why, we, the VIT Hack team, are going to promote continuous
              mentoring for all contestants. Mentoring is about guiding someone
              in the right direction and is important for personal development.
            </div>
          </div>
          <div className='row-span-1 col-span-1 md:col-span-4 p-4 md:p-16 bg-hack-orange rounded-lg'>
            <h2 className='text-sm-heading sm:text-heading font-bold flex flex-col justify-center items-start mb-4 md:mb-10'>
              Project Collabs
            </h2>
            <div className='sm:text-sm-sub-heading'>
              Projects are important for both building your skills and improving
              the quality of your resume. Collaborating with fellow technical
              enthusiasts helps to broaden your perspective and expand your
              knowledge in a particular arena. We, at VIT Hack, push Public
              Github repos that can be worked on by the interested members of
              the community.
            </div>
          </div>
        </section>
        <section className='section flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default sm:text-base'>
          <section className='px-8 sm:px-35 md:pl-35 relative'>
            <Heading>Campus Ambassador</Heading>
            <p className='w-full md:w-5/12 mb-6 mt-8'>{CA_HELP_TEXT.text}</p>
          </section>
        </section>
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
          <div className='w-full flex justify-center items-center relative'>
            <SneakPeak />
          </div>
        </section>
        <div className='hidden md:block h-24' />
        <section className='section text-hack-black flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default sm:text-base'>
          <header className='text-sm-heading sm:text-heading font-bold w-full px-8 sm:px-35'>
            FAQs
          </header>
          <section className='px-8 sm:px-35 w-full mb-32'>
            {CA_FAQ.map((subSection, index) => (
              <div
                key={subSection.id}
                className='w-full md:w-7/12'
                onClick={() => {
                  active !== index ? setActive(index) : setActive(-1)
                }}
              >
                <h4
                  className={`font-bold mt-8 cursor-pointer ${
                    active === index && 'text-hack-blue'
                  }`}
                >
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

import React from 'react';

// Components
import SubSection from '../components/layout/SubSection';
import Heading from '../components/layout/Heading';
import Navbar from '../components/layout/navbar/Navbar';
import HamburgerMenu from '../components/layout/navbar/HamburgerMenu';

// Data
import { CA_HELP_TEXT, CA_FAQ_SUB_SECTIONS, CA_FAQ } from '../DataStore';

const AmbassadorPage = () => {
  return (
    <>
      <HamburgerMenu />
      <Navbar />
      <section className='section flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default sm:text-base'>
        <div className='hidden sm:block w-screen h-20' />
        <div>
          <section className='px-8 sm:px-35 md:pl-35'>
            <div className='text-hack-purple'>
              <Heading>Campus Ambassador</Heading>
            </div>
            <p className='w-full md:w-5/12 mb-6 mt-8'>{CA_HELP_TEXT.text}</p>
            <div className='flex justify-center sm:justify-start'>
              <button
                className='bg-hack-blue cursor-not-allowed opacity-50 text-white rounded font-bold capitalize py-2 px-8'
                type='button'
              >
                Coming Soon
              </button>
            </div>
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
              purple
            />
          ))}
        </section>
        <header className='text-sm-sub-heading sm:text-sub-heading font-bold text-hack-purple w-full px-8 sm:px-35'>
          FAQs
        </header>
        <section className='px-8 sm:px-35 w-full'>
          {CA_FAQ.map((subSection) => (
            <div key={subSection.id} className='w-full md:w-7/12'>
              <h4 className='font-bold mt-8'>{subSection.heading}</h4>
              <div className='my-4'>{subSection.text}</div>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default AmbassadorPage;

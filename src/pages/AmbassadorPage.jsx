import React from 'react';

// Components
import SubSection from '../components/layout/SubSection';
import Heading from '../components/layout/Heading';
import Navbar from '../components/layout/navbar/Navbar';

// Data
import { CA_HELP_TEXT, CA_FAQ_SUB_SECTIONS } from '../DataStore';

const AmbassadorPage = () => {
  return (
    <>
      <Navbar />
      <section className='section flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default sm:text-base'>
        <div className='hidden sm:block w-screen h-20' />
        <div>
          <section className='px-8 sm:px-35 md:pl-35'>
            <div className='text-hack-purple'>
              <Heading>Campus Ambassador</Heading>
            </div>
            <SubSection text={CA_HELP_TEXT.text} />
            <div className='flex justify-center sm:justify-start'>
              <button
                className='bg-hack-blue cursor-not-allowed opacity-50 text-white rounded font-bold capitalize py-2 px-8'
                type='button'
              >
                Fill this form
              </button>
            </div>
          </section>
        </div>
      </section>
      <section className='section text-hack-black flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default sm:text-base'>
        <div className='hidden sm:block w-screen h-20' />
        <div>
          <section className='px-8 sm:px-35 md:pl-35'>
            {CA_FAQ_SUB_SECTIONS.map((subSection) => (
              <SubSection
                heading={subSection.heading}
                text={subSection.text}
                key={subSection.id}
              />
            ))}
          </section>
        </div>
      </section>
    </>
  );
};

export default AmbassadorPage;

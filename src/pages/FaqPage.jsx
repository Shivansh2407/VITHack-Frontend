import React from 'react';

// Components
import SubSection from '../components/layout/SubSection';
import Heading from '../components/layout/Heading';

// Data
import { FAQ_SUB_SECTIONS } from '../DataStore';

const FaqPage = () => {
  return (
    <section className='section text-hack-black flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default sm:text-base'>
      <div className='hidden sm:block w-screen h-20' />
      <div>
        <section className='px-8 sm:px-35 md:pl-35'>
          <div className='text-hack-pink'>
            <Heading>FAQs</Heading>
          </div>
          {FAQ_SUB_SECTIONS.map((subSection) => (
            <SubSection
              heading={subSection.heading}
              text={subSection.text}
              pink={true}
              key={subSection.id}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default FaqPage;

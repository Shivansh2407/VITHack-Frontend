import React from 'react';

// Components
import { ReactComponent as BulbOMan } from '../vectors/BulbOMan.svg';
import PreviousFigures from './PreviousFigures';
import SubSection from '../layout/SubSection';
import Heading from '../layout/Heading';

// Data
import { ABOUT_SUB_SECTIONS } from '../../DataStore';

const AboutSection = () => {
  return (
    <section
      className='section text-hack-black flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default sm:text-base'
      id='about'
      data-aos='fade-up'
    >
      <div className='block w-screen h-4 sm:h-20' />
      <div className='flex justify-start items-center'>
        <section className='px-8 sm:px-35 md:pl-35'>
          <Heading>About Us</Heading>
          {ABOUT_SUB_SECTIONS.map((subSection) => (
            <SubSection
              showLess={subSection.showLess}
              heading={subSection.heading}
              text={subSection.text}
              key={subSection.id}
            />
          ))}
        </section>
      </div>
      <BulbOMan />
      <PreviousFigures />
    </section>
  );
};

export default AboutSection;

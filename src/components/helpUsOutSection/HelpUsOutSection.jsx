import React from 'react';

// Components
import { ReactComponent as SneekPeek } from '../vectors/SneakPeek.svg';
import SubSection from '../layout/SubSection';
import Heading from '../layout/Heading';

// Data
import { HELP_TEXT } from '../../DataStore';

const HelpUsOutSection = () => {
  return (
    <section className='section text-hack-black flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default text-base'>
      <div className='hidden sm:block w-screen h-20' />
      <div className='flex justify-start items-center'>
        <section className='px-8 sm:px-35 md:pl-35'>
          <Heading>Help Us Out</Heading>
          <SubSection heading={HELP_TEXT.heading} text={HELP_TEXT.text} />
          <div className='flex justify-center sm:justify-start'>
            <button
              className='bg-hack-blue cursor-not-allowed opacity-50 text-white rounded font-bold capitalize py-2 px-8'
              type='button'
            >
              Learn More
            </button>
          </div>
        </section>
      </div>
      <div className='w-screen h-20 md:h-32' />
      <SneekPeek />
    </section>
  );
};

export default HelpUsOutSection;

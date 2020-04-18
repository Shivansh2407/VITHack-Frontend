import React from 'react';

// Components
import { ReactComponent as SneekPeek } from '../vectors/SneakPeek.svg';
import SubSection from '../layout/SubSection';
import Heading from '../layout/Heading';

// Data
import { HELP_TEXT } from '../../dataStore';

const HelpUsOutSection = () => {
  return (
    <section className='section text-hack-black flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default'>
      <div className='w-screen h-20' />
      <div className='flex justify-start items-center'>
        <section className='pl-35'>
          <Heading>Help Us Out</Heading>
          <SubSection heading={HELP_TEXT.heading} text={HELP_TEXT.text} />
          <div>
            <button
              className='bg-hack-blue hover:bg-blue-600 text-white py-2 px-8 rounded font-bold capitalize'
              type='button'
            >
              Learn More
            </button>
          </div>
        </section>
      </div>
      <div className='w-screen h-32' />
      <SneekPeek />
    </section>
  );
};

export default HelpUsOutSection;

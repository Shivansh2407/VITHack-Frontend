import React from 'react';

// Components
import { ReactComponent as PaperMa } from '../vectors/PaperMa.svg';
import { ReactComponent as Jack } from '../vectors/Jack.svg';

// Data
import { FOOTER_LINKS } from '../../DataStore';

const SubscribeSection = () => (
  <section className='section text-hack-black flex flex-col justify-center items-center relative overflow-hidden cursor-default sm:text-base mx-auto'>
    <div className='hidden sm:block w-screen h-32' />
    <section className='flex justify-center items-center -mt-8'>
      <div className='sm:w-2/3 md:w-1/2 text-sm-sub-heading sm:text-sub-heading font-bold flex items-center text-center mb-16 px-8 sm:px-20'>
        Be a part of the movement and receive regular updates by subscribing to
        our newsletter!
      </div>
    </section>
    <div className='flex flex-col justify-center items-center -mt-8'>
      <input
        type='email'
        className='rounded py-2 px-6 border border-hack-blue sm:w-full border-2 border-hack-blue mb-8'
        placeholder='Email Here'
        name='email'
      />
      <button
        className='bg-hack-blue cursor-not-allowed opacity-50 text-white rounded font-bold capitalize  py-2 px-8'
        type='button'
      >
        Subscribe
      </button>
    </div>
    <div className='h-20 w-screen' />
    <footer className='flex flex-row flex-wrap justify-center absolute bottom-0 w-screen mb-4 px-8 sm:p-0'>
      {FOOTER_LINKS.map((link) => (
        <a
          className='text-hack-blue cursor-not-allowed opacity-50 text-center mx-4'
          href={link.link}
          key={link.id}
        >
          {link.text}
        </a>
      ))}
    </footer>
    <Jack />
    <PaperMa />
  </section>
);

export default SubscribeSection;

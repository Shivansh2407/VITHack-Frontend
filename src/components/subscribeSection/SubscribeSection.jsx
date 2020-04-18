import React from 'react';

// Components
import { ReactComponent as PaperMa } from '../vectors/PaperMa.svg';
import { ReactComponent as Jack } from '../vectors/Jack.svg';

// Data
import { FOOTER_LINKS } from '../../DataStore';

const SubscribeSection = () => (
  <section className='section text-hack-black flex flex-col justify-center items-center mx-auto relative overflow-hidden cursor-default'>
    <div className='w-screen h-32' />
    <section className='flex justify-center items-center -mt-8'>
      <div className='w-1/2 px-20 text-2xl font-bold flex items-center text-center mb-16'>
        Be a part of the movement and receive regular updates by subscribing to
        our newsletter!
      </div>
    </section>
    <div className='flex flex-col justify-center items-center -mt-8'>
      <input
        type='email'
        className='rounded py-2 px-6 border border-hack-blue w-1/4 mb-8 border-2 border-hack-blue'
        placeholder='Email Here'
        name='email'
      />
      <button
        className='bg-hack-blue hover:bg-blue-600 text-white py-2 px-8 rounded font-bold capitalize'
        type='button'
      >
        Subscribe
      </button>
    </div>
    <br />
    <footer className='flex justify-center absolute bottom-0 mb-4 w-screen'>
      {FOOTER_LINKS.map((link) => (
        <a className='text-hack-blue mx-4 hover:underline' href={link.link}>
          {link.text}
        </a>
      ))}
    </footer>
    <Jack />
    <PaperMa />
  </section>
);

export default SubscribeSection;

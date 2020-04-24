import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Heading from '../layout/Heading';
import { ReactComponent as DownloadBoy } from '../vectors/DownloadBoy.svg';

// Data
import { FOOTER_LINKS } from '../../DataStore';

const EssentialsSection = () => {
  return (
    <section className='section text-hack-black overflow-hidden relative cursor-default sm:text-base'>
      <div className='px-8 sm:px-35'>
        <Heading>Essentials</Heading>
        <div className='flex flex-col justify-center items-start mt-8'>
          {FOOTER_LINKS.map((link) => (
            <div className='font-bold text-hack-blue hover:underline my-4'>
              <Link to={link.link} key={link.id}>
                {link.text}
              </Link>
            </div>
          ))}
        </div>
        <DownloadBoy />
      </div>
      <div className='w-screen h-20 sm:h-32' />
    </section>
  );
};

export default EssentialsSection;

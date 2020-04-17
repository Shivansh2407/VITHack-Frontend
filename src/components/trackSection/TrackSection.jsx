import React from 'react';

// Components
import Heading from '../layout/Heading';

const TrackSection = () => {
  return (
    <section className='section text-hack-black flex flex-col justify-center items-center h-screen relative overflow-hidden'>
      <div className='px-35'>
        <Heading>About</Heading>
        <div className='text-center'>Tracks</div>
        <div className='text-center'>
          <button className='bg-hack-blue text-white' type='button'>
            View Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrackSection;

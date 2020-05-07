import React from 'react';

// Components
import Heading from '../layout/Heading';
import TrackCard from './TrackCard';

// Data
import { TRACKS } from '../../DataStore';

const TrackSection = () => (
  <section
    className='section text-hack-black flex flex-col justify-center items-stretch relative overflow-hidden cursor-default sm:text-base w-full'
    id='tracks'
    data-aos='fade'
  >
    <div className='sm:px-35'>
      <div className='px-8 sm:p-0'>
        <Heading>Tracks</Heading>
      </div>
      <div
        className='text-center grid grid-cols-2 sm:grid-cols-4 my-12 sm:px-4'
        style={{ justifyItems: 'center' }}
      >
        {TRACKS.map((track) => (
          <TrackCard name={track.name} icon={track.icon} key={track.id} />
        ))}
      </div>
      {/* <div className='text-center'>
        <button
          className='bg-hack-blue opacity-50 cursor-not-allowed text-white py-2 px-8 rounded font-bold'
          type='button'
        >
          View Details
        </button>
      </div> */}
    </div>
    {/* <div className='block sm:hidden w-screen h-20' /> */}
  </section>
);

export default TrackSection;

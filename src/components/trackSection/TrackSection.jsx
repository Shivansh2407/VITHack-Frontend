import React from 'react';

// Components
import Heading from '../layout/Heading';
import TrackCard from './TrackCard';

// Data
import { TRACKS } from '../../dataStore';

const TrackSection = () => (
  <section className='section text-hack-black flex flex-col justify-center items-center h-screen relative overflow-hidden cursor-default'>
    <div className='px-35'>
      <Heading>Tracks</Heading>
      <div className='text-center my-12 flex justify-center items-center flex-wrap px-4'>
        {TRACKS.map((track) => (
          <TrackCard name={track.name} key={track.id} />
        ))}
      </div>
      <div className='text-center'>
        <button
          className='bg-hack-blue hover:bg-blue-600  text-white py-2 px-8 rounded font-bold'
          type='button'
        >
          View Details
        </button>
      </div>
    </div>
  </section>
);

export default TrackSection;

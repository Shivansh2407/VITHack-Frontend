import React from 'react';

// Components
import Heading from '../layout/Heading';

const TrackSection = () => {
  const tracks = [
    { id: 1, icon: '', name: 'Healthcare' },
    { id: 2, icon: '', name: 'Fintech' },
    { id: 3, icon: '', name: 'Agriculture' },
    { id: 4, icon: '', name: 'Education' },
    { id: 5, icon: '', name: 'Crisis Response' },
    { id: 6, icon: '', name: 'Cyber Security' },
    { id: 7, icon: '', name: 'Mobility' },
    { id: 8, icon: '', name: 'Open Innovation' },
  ];

  return (
    <section className='section text-hack-black flex flex-col justify-center items-center h-screen relative overflow-hidden'>
      <div className='px-35'>
        <Heading>Tracks</Heading>
        <div className='text-center my-12 flex justify-center items-center flex-wrap px-4'>
          {tracks.map((track) => (
            <div className='mx-16 my-2 w-40 h-40 flex-shrink-0 flex flex-col justify-evenly items-center'>
              <div className='border-2 border-black rounded-full w-20 h-20' />
              <div>{track.name}</div>
            </div>
          ))}
        </div>
        <div className='text-center'>
          <button
            className='bg-hack-blue text-white py-2 px-8 rounded-sm font-bold'
            type='button'
          >
            View Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrackSection;

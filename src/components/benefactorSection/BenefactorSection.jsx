import React from 'react';

// Components
import Heading from '../layout/Heading';

const TrackSection = () => {
  const sponsors = [
    { id: 1, imageSrc: '' },
    { id: 2, imageSrc: '' },
    { id: 3, imageSrc: '' },
  ];
  const casePartners = [
    { id: 1, imageSrc: '' },
    { id: 2, imageSrc: '' },
    { id: 3, imageSrc: '' },
  ];
  const collaborators = [
    { id: 1, imageSrc: '' },
    { id: 2, imageSrc: '' },
    { id: 3, imageSrc: '' },
  ];

  return (
    <section className='section text-hack-black flex flex-col justify-center items-center h-screen relative overflow-hidden'>
      <div className='w-screen h-20' />
      <div className='px-35'>
        <Heading>Benefactors</Heading>
        <div>
          <header className='font-bold text-2xl text-center my-12'>
            Our Sponsors
          </header>
          <div className='flex justify-center items-center'>
            {sponsors.map((sponsor) => (
              <div className='bg-red-300 mx-16 w-40 h-40' />
            ))}
          </div>
          <header className='font-bold text-2xl text-center my-12'>
            Our Case Partners
          </header>
          <div className='flex justify-center items-center'>
            {casePartners.map((partner) => (
              <div className='bg-red-300 mx-16 w-40 h-40' />
            ))}
          </div>
          <header className='font-bold text-2xl text-center my-12'>
            Our Collaborators
          </header>
          <div className='flex justify-center items-center'>
            {collaborators.map((collaborator) => (
              <div className='bg-red-300 mx-16 w-40 h-40' />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackSection;

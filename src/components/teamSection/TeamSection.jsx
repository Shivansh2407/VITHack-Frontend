import React from 'react';

// Components
import Heading from '../layout/Heading';
import TeamCard from './TeamCard';

const TrackSection = () => {
  const team = [
    { id: 1, image: '', name: 'John Doe', position: 'Position' },
    { id: 2, image: '', name: 'John Doe', position: 'Position' },
    { id: 3, image: '', name: 'John Doe', position: 'Position' },
    { id: 4, image: '', name: 'John Doe', position: 'Position' },
    { id: 5, image: '', name: 'John Doe', position: 'Position' },
    { id: 6, image: '', name: 'John Doe', position: 'Position' },
    { id: 7, image: '', name: 'John Doe', position: 'Position' },
    { id: 8, image: '', name: 'John Doe', position: 'Position' },
    { id: 9, image: '', name: 'John Doe', position: 'Position' },
    { id: 10, image: '', name: 'John Doe', position: 'Position' },
  ];

  return (
    <section className='section text-hack-black flex flex-col justify-center items-center h-screen relative overflow-hidden'>
      <div className='px-35'>
        <Heading>The Team</Heading>
        <div className='text-center my-12 flex justify-evenly items-center flex-wrap'>
          {team.map((member) => (
            <TeamCard
              name={member.name}
              position={member.position}
              key={member.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrackSection;

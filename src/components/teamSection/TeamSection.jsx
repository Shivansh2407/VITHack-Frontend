import React from 'react';

// Components
import { ReactComponent as PencilRama } from '../vectors/PencilRama.svg';
import Heading from '../layout/Heading';
import TeamCard from './TeamCard';

// Data
import { TEAM } from '../../DataStore';

const TrackSection = () => (
  <section className='section text-hack-black flex flex-col justify-center items-center h-screen relative overflow-hidden cursor-default'>
    <div className='sm:px-35'>
      <div className='px-8 sm:p-0'>
        <Heading>The Team</Heading>
      </div>
      <div className='text-center flex justify-evenly items-center flex-wrap my-16 sm:px-32'>
        {TEAM.map((member) => (
          <TeamCard
            position={member.position}
            name={member.name}
            key={member.id}
          />
        ))}
      </div>
    </div>
    <PencilRama />
  </section>
);

export default TrackSection;

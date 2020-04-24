import React from 'react';

// Components
import { ReactComponent as PencilRama } from '../vectors/PencilRama.svg';
import Heading from '../layout/Heading';
import TeamCard from './TeamCard';

// Data
import { TEAM, HEADS, TEAM_MOBILE } from '../../DataStore';

const TrackSection = () => (
  <section className='section text-hack-black flex flex-col justify-center items-center relative overflow-hidden cursor-default sm:text-base'>
    <div className='md:px-35 w-full'>
      <div className='px-8 sm:px-35 md:px-0 text-hack-orange'>
        <Heading>The Team</Heading>
      </div>
      <div className='hidden sm:flex text-center sm:justify-center items-center flex-wrap mt-16 sm:35 md:px-32'>
        {HEADS.map((member) => (
          <TeamCard
            position={member.position}
            name={member.name}
            key={member.id}
            image={member.image}
          />
        ))}
      </div>
      <div
        className='hidden sm:grid text-center grid-cols-2 sm:grid-cols-8 mb-16 sm:35 md:px-32'
        style={{ justifyItems: 'center' }}
      >
        {TEAM.map((member, index) => (
          <TeamCard
            position={member.position}
            name={member.name}
            key={member.id}
            image={member.image}
            index={index}
          />
        ))}
      </div>
      <div
        className='grid sm:hidden text-center grid-cols-2 sm:grid-cols-8 my-16 md:px-32'
        style={{ justifyItems: 'center' }}
      >
        {TEAM_MOBILE.map((member, index) => (
          <TeamCard
            position={member.position}
            name={member.name}
            key={member.id}
            image={member.image}
            index={index}
          />
        ))}
      </div>
    </div>
    <PencilRama />
  </section>
);

export default TrackSection;

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
      <div className='md:ml-16 md:-mr-16'>
        <div
          className='hidden sm:grid grid-cols-8 sm:px-35 md:px-32'
          style={{ justifyItems: 'center' }}
        >
          {HEADS.map((member, index) => (
            <div
              className={`col-span-2 ${index === 0 && 'col-start-2'}`}
              key={member.id}
            >
              <TeamCard
                position={member.position}
                name={member.name}
                image={member.image}
              />
            </div>
          ))}
        </div>
        <div
          className='hidden sm:grid text-center grid-cols-2 sm:grid-cols-8 mb-16 sm:px-35 md:px-32'
          style={{ justifyItems: 'center' }}
        >
          {TEAM.map((member, index) => (
            <div
              className={`col-span-2 ${index === 8 && 'col-start-2'}`}
              style={{ justifyItems: 'center' }}
              key={member.id}
            >
              <TeamCard
                position={member.position}
                name={member.name}
                image={member.image}
              />
            </div>
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
    </div>
    <PencilRama />
  </section>
);

export default TrackSection;

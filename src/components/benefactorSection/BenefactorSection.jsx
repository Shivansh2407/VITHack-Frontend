import React from 'react';

// Components
import { ReactComponent as SponsorMan } from '../vectors/SponsorMan.svg';
import { ReactComponent as CollabMan } from '../vectors/CollabMan.svg';
import { ReactComponent as CaseLady } from '../vectors/CaseLady.svg';
import BenefactorCard from './BenefactorCard';
import Heading from '../layout/Heading';

// Data
import { CASE_PARTNERS, COLLABORATORS, SPONSORS } from '../../dataStore';

const TrackSection = () => (
  <section className='section text-hack-black flex flex-col justify-center items-center h-screen relative overflow-hidden cursor-default'>
    <div className='w-screen h-20' />
    <div className='px-35'>
      <Heading>Previous Benefactors</Heading>
      <div>
        <header className='font-bold text-2xl text-center my-12'>
          Our Sponsors
        </header>
        <div className='flex flex-wrap justify-center items-center'>
          {SPONSORS.map((sponsor) => (
            <BenefactorCard imageSrc={sponsor.imageSrc} key={sponsor.id} />
          ))}
        </div>
        <header className='font-bold text-2xl text-center my-12'>
          Our Case Partners
        </header>
        <div className='flex flex-wrap justify-center items-center'>
          {CASE_PARTNERS.map((partner) => (
            <BenefactorCard imageSrc={partner.imageSrc} key={partner.id} />
          ))}
        </div>
        <header className='font-bold text-2xl text-center my-12'>
          Our Collaborators
        </header>
        <div className='flex flex-wrap justify-center items-center px-40'>
          {COLLABORATORS.map((collaborator) => (
            <BenefactorCard
              imageSrc={collaborator.imageSrc}
              key={collaborator.id}
            />
          ))}
        </div>
      </div>
    </div>
    <div className='w-screen h-32' />
    <SponsorMan />
    <CaseLady />
    <CollabMan />
  </section>
);

export default TrackSection;

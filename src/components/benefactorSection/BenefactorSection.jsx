import React from 'react';

// Components
import Heading from '../layout/Heading';
import BenefactorCard from './BenefactorCard';

const TrackSection = () => {
  const sponsors = [
    {
      id: 1,
      imageSrc: `${process.env.PUBLIC_URL}/assets/images/ChallengeRocketLogo.png`,
    },
    {
      id: 2,
      imageSrc: `${process.env.PUBLIC_URL}/assets/images/ZeitLogo.png`,
    },
    {
      id: 3,
      imageSrc: `${process.env.PUBLIC_URL}/assets/images/GithubLogo.png`,
    },
  ];
  const casePartners = [
    {
      id: 1,
      imageSrc: `${process.env.PUBLIC_URL}/assets/images/VicaraLogo.png`,
    },
    {
      id: 2,
      imageSrc: `${process.env.PUBLIC_URL}/assets/images/InversionLogo.png`,
    },
    {
      id: 3,
      imageSrc: `${process.env.PUBLIC_URL}/assets/images/ServifyLogo.png`,
    },
    {
      id: 4,
      imageSrc: `${process.env.PUBLIC_URL}/assets/images/DeeviaLogo.png`,
    },
    {
      id: 5,
      imageSrc: `${process.env.PUBLIC_URL}/assets/images/IncubationLogo.png`,
    },
    {
      id: 6,
      imageSrc: `${process.env.PUBLIC_URL}/assets/images/AsylumsLogo.png`,
    },
    {
      id: 7,
      imageSrc: `${process.env.PUBLIC_URL}/assets/images/CrowderaLogo.png`,
    },
    {
      id: 8,
      imageSrc: `${process.env.PUBLIC_URL}/assets/images/HoneywellLogo.png`,
    },
    {
      id: 9,
      imageSrc: `${process.env.PUBLIC_URL}/assets/images/HPLogo.png`,
    },
  ];
  const collaborators = [
    {
      id: 1,
      imageSrc: `${process.env.PUBLIC_URL}/assets/images/EDLogo.png`,
    },
    {
      id: 2,
      imageSrc: `${process.env.PUBLIC_URL}/assets/images/TeknoLogo.png`,
    },
    {
      id: 3,
      imageSrc: `${process.env.PUBLIC_URL}/assets/images/YourStoryLogo.png`,
    },
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
          <div className='flex flex-wrap justify-center items-center'>
            {sponsors.map((sponsor) => (
              <BenefactorCard imageSrc={sponsor.imageSrc} key={sponsor.key} />
            ))}
          </div>
          <header className='font-bold text-2xl text-center my-12'>
            Our Case Partners
          </header>
          <div className='flex flex-wrap justify-center items-center'>
            {casePartners.map((partner) => (
              <BenefactorCard imageSrc={partner.imageSrc} key={partner.key} />
            ))}
          </div>
          <header className='font-bold text-2xl text-center my-12'>
            Our Collaborators
          </header>
          <div className='flex flex-wrap justify-center items-center'>
            {collaborators.map((collaborator) => (
              <BenefactorCard
                imageSrc={collaborator.imageSrc}
                key={collaborator.key}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackSection;

import React from 'react';

// Components
import Heading from '../layout/Heading';
import SubSection from '../layout/SubSection';

const HelpUsOutSection = () => {
  const subSections = [
    {
      id: 1,
      heading: 'Campus Ambassadors',
      text:
        'There’s more to college than a degree and grades, be a part of something big. VITHack isn’t just a college hackathon, it’s a phenomenon. Help us get the word out to your college and become a trendsetter!',
    },
  ];

  return (
    <section className='section text-hack-black flex flex-col justify-center items-center mx-auto relative overflow-hidden'>
      <div className='w-screen h-20' />
      <div className='flex justify-start items-center'>
        <section className='pl-35'>
          <Heading>Help Us Out</Heading>
          {subSections.map((subSection) => (
            <SubSection
              key={subSection.id}
              text={subSection.text}
              heading={subSection.heading}
            />
          ))}
          <div>
          <button
            className='bg-hack-blue text-white py-2 px-8 rounded-sm font-bold'
            type='button'
          >
            Learn More
          </button>
        </div>
        </section>
      </div>
      <div className='w-screen h-32' />
    </section>
  );
};

export default HelpUsOutSection;

import React from 'react';

// Components
import Heading from '../layout/Heading';
import SubSection from '../layout/SubSection';
import BulbOMan from './BulbOMan';
import PreviousFigures from './PreviousFigures';

const AboutSection = () => {
  const subSections = [
    {
      id: 1,
      heading: 'About VIT',
      text:
        'Vellore Institute of Technology, Vellore, is a profound engineering university in India. VIT is well known for its rich diversity in nationality and culture in its students. It encourages aspiring innovators and researchers to work towards technical development. A technical fest, namely, GraVITas is conducted here to portray these technical aficionados on an official forum with experts for advice and inspiration. Being a celebrated college it demands a humungous footfall in GraVITas.',
      showLess: true,
    },
    {
      id: 2,
      heading: 'Why VIT Hack?',
      text:
        'VIT Hack aims to provide an arena for participants to contribute their ideas as solutions to real-world problems. Being a global event, it aims to gain from the unification of various cultures leading to various solutions. Problem statements will be driven towards social causes to help channelize the participants’ thoughts into a revolutionary solution. VIT Hack focuses on bringing leading industry experts to help ignite innovation. All that we wish is you bring your best ideas, your confidence and your willingness to have a great time.',
      showLess: true,
    },
  ];

  return (
    <section className='text-hack-black flex flex-col justify-center items-center mx-auto relative overflow-hidden'>
      <div className='flex justify-start items-center'>
        <section className='pl-35'>
          <Heading>About</Heading>
          {subSections.map((subSection) => (
            <SubSection
              key={subSection.id}
              text={subSection.text}
              heading={subSection.heading}
              showLess={subSection.showLess}
            />
          ))}
        </section>
      </div>
      <BulbOMan />
      <PreviousFigures />
    </section>
  );
};

export default AboutSection;

import React from 'react';

// Components
import Heading from '../layout/Heading';
import SubSection from '../layout/SubSection';
import ContactGuys from './ContactGuys';
import SocialTray from './SocialTray';

const ContactSection = () => {
  const subSections = [
    {
      id: 1,
      heading: 'Participants',
      text: (
        <>
          If you have any queries regarding VITHack, contact us through{' '}
          <a
            href={process.env.PUBLIC_URL}
            className='text-hack-blue hover:underline'
          >
            email
          </a>
          . Feel free to reach out to us and we will get back to you as soon as
          possible.
        </>
      ),
      showLess: false,
    },
    {
      id: 2,
      heading: 'Companies',
      text: (
        <>
          If you’re interested in collaborating with us and being a part of one
          of the largest hackathons in India, contact us through{' '}
          <a
            href={process.env.PUBLIC_URL}
            className='text-hack-blue hover:underline'
          >
            email
          </a>
          . We’d love to have you on board and do something amazing together.
        </>
      ),
      showLess: false,
    },
  ];

  return (
    <section
      className='text-hack-black flex flex-col justify-center items-center mx-auto relative overflow-hidden pt-10 mb-40'
      id='contact-us'
    >
      <div className='flex justify-start items-center'>
        <section className='pl-35'>
          <Heading>Contact Us</Heading>
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
      <ContactGuys />
      <SocialTray />
    </section>
  );
};

export default ContactSection;

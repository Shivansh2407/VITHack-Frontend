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
            href='mailto:participants@vithack.in'
            className='text-hack-blue hover:underline'
          >
            email
          </a>
          .
          <br />
          <br />
          Feel free to reach out to us and we will get back to you as soon as
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
            href='mailto:collaborations@vithack.in'
            className='text-hack-blue hover:underline'
          >
            email
          </a>
          .
          <br />
          <br />
          We’d love to have you on board and do something amazing together.
        </>
      ),
      showLess: false,
    },
  ];

  return (
    <section
      className='section text-hack-black flex flex-col justify-center items-center mx-auto relative overflow-hidden relative'
      id='contact-us'
    >
      <section className='px-35'>
        <Heading>Contact Us</Heading>
        <div className='flex justify-start'>
          {subSections.map((subSection, index) => (
            <React.Fragment key={subSection.id}>
              {index === 1 && (
                <div className='w-1/2 mx-20'>
                  <ContactGuys />
                </div>
              )}
              <SubSection
                text={subSection.text}
                heading={subSection.heading}
                showLess={subSection.showLess}
              />
            </React.Fragment>
          ))}
        </div>
      </section>
      <SocialTray />
    </section>
  );
};

export default ContactSection;

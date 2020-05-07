import React from 'react';

// Components
import { ReactComponent as ContactGuys } from '../vectors/ContactGuys.svg';
import SubSection from '../layout/SubSection';
import Heading from '../layout/Heading';
import SocialTray from './SocialTray';

// Data
import { CONTACT_TEXTS } from '../../DataStore';

const ContactSection = () => (
  <section
    className='section text-hack-black flex flex-col justify-center items-centerrelative overflow-hidden relative cursor-default sm:text-base mx-auto'
    id='contact'
    data-aos='fade-up'
  >
    <section className='px-8 sm:px-35'>
      <Heading>Contact Us</Heading>
      <div className='flex flex-col md:flex-row justify-center md:justify-start'>
        {CONTACT_TEXTS.map((text, index) => (
          <React.Fragment key={text.id}>
            {index === 1 && (
              <div className='sm:w-1/2 mx-auto md:mx-20'>
                <ContactGuys />
              </div>
            )}
            <SubSection
              showLess={text.showLess}
              heading={text.heading}
              text={text.text}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
    <SocialTray />
    <div className='block w-screen h-8 md:h-20' />
  </section>
);

export default ContactSection;

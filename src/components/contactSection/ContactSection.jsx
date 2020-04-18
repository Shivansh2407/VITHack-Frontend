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
    className='section text-hack-black flex flex-col justify-center items-centerrelative overflow-hidden relative cursor-default mx-auto'
    id='contact-us'
  >
    <section className='px-35'>
      <Heading>Contact Us</Heading>
      <div className='flex justify-start'>
        {CONTACT_TEXTS.map((text, index) => (
          <React.Fragment key={text.id}>
            {index === 1 && (
              <div className='w-1/2 mx-20'>
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
  </section>
);

export default ContactSection;

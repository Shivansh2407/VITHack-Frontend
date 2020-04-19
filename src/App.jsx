/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

// Fullpage.js
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

// Sections
import Navbar from './components/layout/navbar/Navbar';
import {
  BenefactorSection,
  SubscribeSection,
  HelpUsOutSection,
  ContactSection,
  LandingSection,
  // TrackSection,
  AboutSection,
  // TeamSection,
  Preloader,
} from './sections';

// Data
import { SECTION_ANCHORS, LICENSE_KEY } from './DataStore';

// Stylesheets
import './styles.css';

const App = () => (
  <>
    <Navbar />
    <Preloader />
    <ReactFullpage
      scrollOverflow
      anchors={SECTION_ANCHORS}
      licenseKey={LICENSE_KEY}
      render={() => {
        return (
          <>
            <LandingSection />
            <AboutSection />
            {/* <TrackSection /> */}
            <HelpUsOutSection />
            <BenefactorSection />
            {/* <TeamSection /> */}
            <ContactSection />
            <SubscribeSection />
          </>
        );
      }}
    />
  </>
);

export default App;

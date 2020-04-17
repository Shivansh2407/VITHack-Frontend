/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import ReactFullpage from '@fullpage/react-fullpage';

import './styles.css';

import LandingSection from './components/landingSection/LandingSection';
import AboutSection from './components/aboutSection/AboutSection';
import ContactSection from './components/contactSection/ContactSection';
import Navbar from './components/layout/navbar/Navbar';
import TrackSection from './components/trackSection/TrackSection';
import TeamSection from './components/teamSection/TeamSection';

const App = () => (
  <>
    <Navbar />
    <ReactFullpage
      scrollOverflow
      anchors={['home', 'about', 'tracks', 'team', 'contact']}
      licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
      render={() => {
        return (
          <div>
            <LandingSection />
            <AboutSection />
            <TrackSection />
            <TeamSection />
            <ContactSection />
          </div>
        );
      }}
    />
  </>
);

export default App;

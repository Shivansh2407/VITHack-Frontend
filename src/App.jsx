/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

// Fullpage.js
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

// Sections
import BenefactorSection from './components/benefactorSection/BenefactorSection';
import SubscribeSection from './components/subscribeSection/SubscribeSection';
import HelpUsOutSection from './components/helpUsOutSection/HelpUsOutSection';
import ContactSection from './components/contactSection/ContactSection';
import LandingSection from './components/landingSection/LandingSection';
import TrackSection from './components/trackSection/TrackSection';
import AboutSection from './components/aboutSection/AboutSection';
import TeamSection from './components/teamSection/TeamSection';
import Navbar from './components/layout/navbar/Navbar';

// Stylesheets
import './styles.css';

const App = () => (
  <>
    <Navbar />
    <ReactFullpage
      scrollOverflow
      anchors={[
        'home',
        'about',
        'tracks',
        'help',
        'benefactors',
        'team',
        'contact',
        'subscribe',
      ]}
      licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
      render={() => {
        return (
          <>
            <LandingSection />
            <AboutSection />
            <TrackSection />
            <HelpUsOutSection />
            <BenefactorSection />
            <TeamSection />
            <ContactSection />
            <SubscribeSection />
          </>
        );
      }}
    />
  </>
);

export default App;

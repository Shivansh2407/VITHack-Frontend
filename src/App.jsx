/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// Fullpage.js
// import ReactFullpage from '@fullpage/react-fullpage';
// import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

// Sections
import Navbar from './components/layout/navbar/Navbar';
import {
  BenefactorSection,
  SubscribeSection,
  HelpUsOutSection,
  ContactSection,
  LandingSection,
  // TrackSection,
  HamburgerMenu,
  AboutSection,
  // TeamSection,
  Preloader,
} from './sections';

// Data
// import { SECTION_ANCHORS, LICENSE_KEY } from './DataStore';

// Stylesheets
import './styles.css';
import './App.css';

// Alert Options
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

const App = () => {
  return (
    <>
      <AlertProvider template={AlertTemplate} {...options}>
        <HamburgerMenu />
        <Navbar />
        <Preloader />
        {/* <ReactFullpage
        scrollOverflow
        anchors={SECTION_ANCHORS}
        licenseKey={LICENSE_KEY}
        render={() => {
          return (
            <> */}
        <LandingSection />
        <AboutSection />
        {/* <TrackSection /> */}
        <HelpUsOutSection />
        <BenefactorSection />
        {/* <TeamSection /> */}
        <ContactSection />
        <SubscribeSection />
        {/* </>
          );
        }}
      /> */}
      </AlertProvider>
    </>
  );
};

export default App;

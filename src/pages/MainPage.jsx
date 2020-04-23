import React from 'react';

// Sections
import {
  BenefactorSection,
  SubscribeSection,
  HelpUsOutSection,
  ContactSection,
  LandingSection,
  TrackSection,
  AboutSection,
  // TeamSection,
  Preloader,
} from '../sections';
import EssentialsSection from '../components/essentialsSection/EssentialsSection';

const MainPage = () => {
  return (
    <>
      <Preloader />
      <LandingSection />
      <AboutSection />
      <TrackSection />
      <HelpUsOutSection />
      <BenefactorSection />
      <ContactSection />
      <EssentialsSection />
      <SubscribeSection />
    </>
  );
};

export default MainPage;

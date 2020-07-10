import React from 'react'

// Sections
import {
  BenefactorSection,
  SubscribeSection,
  ContactSection,
  LandingSection,
  TrackSection,
  AboutSection,
  AboutHackSection,
} from '../sections'
import EssentialsSection from '../components/essentialsSection/EssentialsSection'
import Navbar from '../components/layout/navbar/Navbar'
import HamburgerMenu from '../components/layout/navbar/HamburgerMenu'

const MainPage = () => {
  return (
    <>
      <HamburgerMenu />
      <Navbar />
      <LandingSection />
      <AboutHackSection />
      <TrackSection />
      <AboutSection />
      <BenefactorSection />
      <ContactSection />
      <EssentialsSection />
      <SubscribeSection />
    </>
  )
}

export default MainPage

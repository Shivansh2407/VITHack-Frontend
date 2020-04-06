import React from 'react';

// Components
import LandingSection from './components/landingSection/LandingSection';
import Navbar from './components/layout/navbar/Navbar';
import AboutSection from './components/aboutSection/AboutSection';

// Stylesheets
import './App.css';
import './styles.css';

const App = () => (
  <>
    <Navbar />
    <LandingSection />
    <AboutSection />
  </>
);

export default App;

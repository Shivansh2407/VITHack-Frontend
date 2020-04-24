import React from 'react';
import Navbar from '../components/layout/navbar/Navbar';
import TeamSection from '../components/teamSection/TeamSection';
import HamburgerMenu from '../components/layout/navbar/HamburgerMenu';

const TeamPage = () => {
  return (
    <>
      <HamburgerMenu />
      <Navbar />
      <TeamSection />
    </>
  );
};

export default TeamPage;

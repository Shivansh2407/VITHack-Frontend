// All constant data/text is imported from this file for a scalable workflow

import React from 'react';
import { v4 as uuid } from 'uuid';

// Fullpage.js License:
const LICENSE_KEY = 'OPEN-SOURCE-GPLV3-LICENSE';

// Section components:
const SECTION_ANCHORS = [
  'home',
  'about',
  // 'tracks',
  'help',
  'benefactors',
  // 'team',
  'contact',
  'subscribe',
];

// Nav Links:
const NAV_LINKS = [
  {
    id: uuid(),
    text: 'Blog',
    url: 'https://medium.com/@VIT_Hack',
    anchor: 'home',
  },
  { id: uuid(), text: 'Help us Out', url: '/#help', anchor: 'help' },
  { id: uuid(), text: 'Tracks', url: '/#tracks', anchor: 'tracks' },
  { id: uuid(), text: 'Contact Us', url: '/#contact', anchor: 'contact' },
];

// About Section
const ABOUT_SUB_SECTIONS = [
  {
    id: uuid(),
    heading: 'About VIT',
    text:
      'Vellore Institute of Technology, Vellore, is a profound engineering university in India. VIT is well known for its rich diversity in nationality and culture in its students. It encourages aspiring innovators and researchers to work towards technical development. A technical fest, namely, graVITas is conducted here to portray these technical aficionados on an official forum with experts for advice and inspiration. Being a celebrated college it demands a humungous footfall in graVITas.',
    showLess: true,
  },
  {
    id: uuid(),
    heading: 'Why VIT Hack?',
    text:
      'VIT Hack aims to provide an arena for participants to contribute their ideas as solutions to real-world problems. Being a global event, it aims to gain from the unification of various cultures leading to various solutions. Problem statements will be driven towards social causes to help channelize the participants’ thoughts into a revolutionary solution. VIT Hack focuses on bringing leading industry experts to help ignite innovation. All that we wish is you bring your best ideas, your confidence and your willingness to have a great time.',
    showLess: true,
  },
];

const PREVIOUS_FIGURES = [
  {
    id: uuid(),
    stat: '₹6.15L',
    text: 'Worth Prices',
    color: 'text-hack-yellow',
  },
  { id: uuid(), stat: '2942', text: 'Registrations', color: 'text-hack-pink' },
  {
    id: uuid(),
    stat: '20+',
    text: 'Involved States',
    color: 'text-hack-green',
  },
  {
    id: uuid(),
    stat: 'INCUB ATION',
    text: 'Support',
    color: 'text-hack-yellow',
  },
  {
    id: uuid(),
    stat: '36+',
    text: 'Paid Internships',
    color: 'text-hack-pink',
  },
  { id: uuid(), stat: '36', text: 'Hours', color: 'text-hack-green' },
];

// Track Section
const TRACKS = [
  { id: uuid(), icon: '', name: 'Healthcare' },
  { id: uuid(), icon: '', name: 'Fintech' },
  { id: uuid(), icon: '', name: 'Agriculture' },
  { id: uuid(), icon: '', name: 'Education' },
  { id: uuid(), icon: '', name: 'Crisis Response' },
  { id: uuid(), icon: '', name: 'Cyber Security' },
  { id: uuid(), icon: '', name: 'Mobility' },
  { id: uuid(), icon: '', name: 'Open Innovation' },
];

// Help Us Out
const HELP_TEXT = {
  heading: 'Campus Ambassadors',
  text:
    'There’s more to college than a degree and grades, be a part of something big. VITHack isn’t just a college hackathon, it’s a phenomenon. Help us get the word out to your college and become a trendsetter!',
};

// Benefactors
const SPONSORS = [
  {
    id: uuid(),
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/ChallengeRocketLogo.png`,
  },
  {
    id: uuid(),
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/ZeitLogo.png`,
  },
  {
    id: uuid(),
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/GithubLogo.png`,
  },
];

const CASE_PARTNERS = [
  {
    id: uuid(),
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/VicaraLogo.png`,
  },
  {
    id: uuid(),
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/InversionLogo.png`,
  },
  {
    id: uuid(),
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/ServifyLogo.png`,
  },
  {
    id: uuid(),
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/DeeviaLogo.png`,
  },
  {
    id: uuid(),
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/IncubationLogo.png`,
  },
  {
    id: uuid(),
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/AsylumsLogo.png`,
  },
  {
    id: uuid(),
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/CrowderaLogo.png`,
  },
  {
    id: uuid(),
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/HoneywellLogo.png`,
  },
  {
    id: uuid(),
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/HPLogo.png`,
  },
];

const COLLABORATORS = [
  {
    id: uuid(),
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/EDLogo.png`,
  },
  {
    id: uuid(),
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/TeknoLogo.png`,
  },
  {
    id: uuid(),
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/YourStoryLogo.png`,
  },
  {
    id: uuid(),
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/ItsaiLogo.png`,
  },
];

// Team
const TEAM = [
  { id: uuid(), image: '', name: 'John Doe', position: 'Position' },
  { id: uuid(), image: '', name: 'John Doe', position: 'Position' },
  { id: uuid(), image: '', name: 'John Doe', position: 'Position' },
  { id: uuid(), image: '', name: 'John Doe', position: 'Position' },
  { id: uuid(), image: '', name: 'John Doe', position: 'Position' },
  { id: uuid(), image: '', name: 'John Doe', position: 'Position' },
  { id: uuid(), image: '', name: 'John Doe', position: 'Position' },
  { id: uuid(), image: '', name: 'John Doe', position: 'Position' },
  { id: uuid(), image: '', name: 'John Doe', position: 'Position' },
  { id: uuid(), image: '', name: 'John Doe', position: 'Position' },
];

// Contact Section
const CONTACT_TEXTS = [
  {
    id: uuid(),
    heading: 'Participants',
    text: (
      <>
        If you have any queries regarding VITHack, contact us through{' '}
        <a
          href='mailto:participants@vithack.in'
          className='text-hack-blue hover:underline'
        >
          email
        </a>
        .
        <br />
        <br />
        Feel free to reach out to us and we will get back to you as soon as
        possible.
      </>
    ),
    showLess: false,
  },
  {
    id: uuid(),
    heading: 'Companies',
    text: (
      <>
        If you’re interested in collaborating with us and being a part of one of
        the largest hackathons in India, contact us through{' '}
        <a
          href='mailto:collaborations@vithack.in'
          className='text-hack-blue hover:underline'
        >
          email
        </a>
        .
        <br />
        <br />
        We’d love to have you on board and do something amazing together.
      </>
    ),
    showLess: false,
  },
];

// Footer
const FOOTER_LINKS = [
  { id: uuid(), text: 'FAQs', link: `${process.env.PUBLIC_URL}/#home` },
  { id: uuid(), text: 'Brochure', link: `${process.env.PUBLIC_URL}/#home` },
  {
    id: uuid(),
    text: 'Terms and Conditions',
    link: `${process.env.PUBLIC_URL}/#home`,
  },
  {
    id: uuid(),
    text: 'Privacy Policy',
    link: `${process.env.PUBLIC_URL}/#home`,
  },
];

export {
  ABOUT_SUB_SECTIONS,
  PREVIOUS_FIGURES,
  SECTION_ANCHORS,
  CONTACT_TEXTS,
  COLLABORATORS,
  CASE_PARTNERS,
  FOOTER_LINKS,
  LICENSE_KEY,
  NAV_LINKS,
  HELP_TEXT,
  SPONSORS,
  TRACKS,
  TEAM,
};

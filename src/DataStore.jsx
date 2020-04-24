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
  },
  { id: uuid(), text: 'Help us Out', url: '#help' },
  { id: uuid(), text: 'Tracks', url: '#tracks' },
  { id: uuid(), text: 'Contact Us', url: '#contact' },
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
    text: 'Worth Prizes',
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
  {
    id: uuid(),
    icon: `${process.env.PUBLIC_URL}/assets/images/Healthcare.png`,
    name: 'Healthcare',
  },
  {
    id: uuid(),
    icon: `${process.env.PUBLIC_URL}/assets/images/Fintech.png`,
    name: 'Fintech',
  },
  {
    id: uuid(),
    icon: `${process.env.PUBLIC_URL}/assets/images/Agriculture.png`,
    name: 'Agriculture',
  },
  {
    id: uuid(),
    icon: `${process.env.PUBLIC_URL}/assets/images/Education.png`,
    name: 'Education',
  },
  {
    id: uuid(),
    icon: `${process.env.PUBLIC_URL}/assets/images/CrisisResponse.png`,
    name: 'Crisis Response',
  },
  {
    id: uuid(),
    icon: `${process.env.PUBLIC_URL}/assets/images/CyberSec.png`,
    name: 'Cyber Security',
  },
  {
    id: uuid(),
    icon: `${process.env.PUBLIC_URL}/assets/images/Mobility.png`,
    name: 'Mobility',
  },
  {
    id: uuid(),
    icon: `${process.env.PUBLIC_URL}/assets/images/OpenInnov.png`,
    name: 'Open Innovation',
  },
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
  { id: uuid(), image: '', name: 'Aman Lalchandani', position: 'Design' },
  { id: uuid(), image: '', name: 'Chavi Agarwal', position: 'Content' },
  { id: uuid(), image: '', name: 'Kritika Sharma', position: 'Marketing' },
  { id: uuid(), image: '', name: 'Lakshay Almadi', position: 'Participants' },
  { id: uuid(), image: '', name: 'Madhav', position: 'HIEC' },
  { id: uuid(), image: '', name: 'Naynika Wason', position: 'Co-Director' },
  { id: uuid(), image: '', name: 'Pranav Sharma', position: 'Director' },
  { id: uuid(), image: '', name: 'Priya Thupalli', position: 'Logistics' },
  { id: uuid(), image: '', name: 'Shaanvi Mehta', position: 'Co-Director' },
  { id: uuid(), image: '', name: 'Shreyansh Ojha', position: 'Logistics' },
  { id: uuid(), image: '', name: 'Subham Srivastava', position: 'Sponsors' },
  { id: uuid(), image: '', name: 'Sparsh Srivastava', position: 'Technical' },
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
  { id: uuid(), text: 'Brochure', link: `${process.env.PUBLIC_URL}/#home` },
  { id: uuid(), text: 'FAQs', link: `${process.env.PUBLIC_URL}/faqs` },
  {
    id: uuid(),
    text: 'Privacy Policy',
    link: `${process.env.PUBLIC_URL}/#home`,
  },
  {
    id: uuid(),
    text: 'Terms and Conditions',
    link: `${process.env.PUBLIC_URL}/#home`,
  },
  {
    id: uuid(),
    text: 'The Team',
    link: `${process.env.PUBLIC_URL}/team`,
  },
];

const FAQ_SUB_SECTIONS = [
  {
    id: uuid(),
    heading: 'What is a Hackathon?',
    text:
      'A hackathon is a comprehensive event where each team is given a platform to develop an idea to produce a solution for a real world problem statement.',
  },
  {
    id: uuid(),
    heading: 'Does this have any registration fee?',
    text: 'There is no registration fee for VIT Hack.',
  },
  {
    id: uuid(),
    heading: 'I am not from VIT Vellore. Can I still participate?',
    text:
      'Yes, As long as you are a student at any college and are 18 or older, you are invited to apply to VIT Hack.',
  },
  {
    id: uuid(),
    heading:
      'Do I need to have any specific qualifications to be a participant for VIT Hack?',
    text:
      'If you love to code, you are more than welcome to participate in the hackathon.',
  },
  {
    id: uuid(),
    heading: 'What should I carry to the hack?',
    text:
      'We recommend to get your own laptop with all the necessary softwares installed, chargers, student ID.',
  },
  {
    id: uuid(),
    heading: 'What can one expect to take away from this hackathon?',
    text:
      "You will have a mini project at the end of the hackathon and develop a new skill set. All in all it'll be a hackathon filled with fun, excitement, learning and cool shwags.",
  },
  {
    id: uuid(),
    heading: 'How do teams work?',
    text:
      'Teams are at most 6 people. You can select teammates when you register, or you can register individually without specified teammates. In the latter case, we will group you with other teams looking for members.',
  },
  {
    id: uuid(),
    heading: 'How many members are required in a team?',
    text:
      'An ideal team would consist of at most 6 members and at least 3 members to be qualified as a team.',
  },
  {
    id: uuid(),
    heading:
      'Will participants get to interact with industrial experts during the hack?',
    text:
      'Yes. Continuous mentoring would be provided by industrial experts to help you improvise on your project and pitch the idea better. After all, VIT Hack is not just a hackathon, rather a hub where innovative minds think alike.',
  },
  {
    id: uuid(),
    heading:
      'Are there any restrictions regarding the submission for the hack?',
    text:
      'If your project can be implemented by either a technical application or a hardware prototype, it is considered as a legitimate submission.',
  },
];

export {
  ABOUT_SUB_SECTIONS,
  PREVIOUS_FIGURES,
  SECTION_ANCHORS,
  CONTACT_TEXTS,
  FAQ_SUB_SECTIONS,
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

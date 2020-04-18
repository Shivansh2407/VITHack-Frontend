// All constant data/text is imported from this file for a scalable workflow

// Fullpage.js License:
const LICENSE_KEY = 'OPEN-SOURCE-GPLV3-LICENSE';

// Section components:
const SECTION_ANCHORS = [
  'home',
  'about',
  'tracks',
  'help',
  'benefactors',
  'team',
  'contact',
  'subscribe',
];

// Nav Links:
const NAV_LINKS = [
  { id: 1, text: 'Blog', url: '/#home', anchor: 'home' },
  { id: 2, text: 'Help us Out', url: '/#help', anchor: 'help' },
  { id: 3, text: 'Tracks', url: '/#tracks', anchor: 'tracks' },
  { id: 4, text: 'Contact Us', url: '/#contact', anchor: 'contact' },
];

// About Section
const ABOUT_SUB_SECTIONS = [
  {
    id: 1,
    heading: 'About VIT',
    text:
      'Vellore Institute of Technology, Vellore, is a profound engineering university in India. VIT is well known for its rich diversity in nationality and culture in its students. It encourages aspiring innovators and researchers to work towards technical development. A technical fest, namely, graVITas is conducted here to portray these technical aficionados on an official forum with experts for advice and inspiration. Being a celebrated college it demands a humungous footfall in graVITas.',
    showLess: true,
  },
  {
    id: 2,
    heading: 'Why VIT Hack?',
    text:
      'VIT Hack aims to provide an arena for participants to contribute their ideas as solutions to real-world problems. Being a global event, it aims to gain from the unification of various cultures leading to various solutions. Problem statements will be driven towards social causes to help channelize the participants’ thoughts into a revolutionary solution. VIT Hack focuses on bringing leading industry experts to help ignite innovation. All that we wish is you bring your best ideas, your confidence and your willingness to have a great time.',
    showLess: true,
  },
];

const PREVIOUS_FIGURES = [
  { id: 1, stat: '₹6.15L', text: 'Worth Prices', color: 'text-hack-yellow' },
  { id: 2, stat: '2942', text: 'Registrations', color: 'text-hack-pink' },
  { id: 3, stat: '20+', text: 'Involved States', color: 'text-hack-green' },
  { id: 4, stat: 'INCUB ATION', text: 'Support', color: 'text-hack-yellow' },
  { id: 5, stat: '36+', text: 'Paid Internships', color: 'text-hack-pink' },
  { id: 6, stat: '36', text: 'Hours', color: 'text-hack-green' },
];

// Track Section
const TRACKS = [
  { id: 1, icon: '', name: 'Healthcare' },
  { id: 2, icon: '', name: 'Fintech' },
  { id: 3, icon: '', name: 'Agriculture' },
  { id: 4, icon: '', name: 'Education' },
  { id: 5, icon: '', name: 'Crisis Response' },
  { id: 6, icon: '', name: 'Cyber Security' },
  { id: 7, icon: '', name: 'Mobility' },
  { id: 8, icon: '', name: 'Open Innovation' },
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
    id: 1,
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/ChallengeRocketLogo.png`,
  },
  {
    id: 2,
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/ZeitLogo.png`,
  },
  {
    id: 3,
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/GithubLogo.png`,
  },
];

const CASE_PARTNERS = [
  {
    id: 1,
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/VicaraLogo.png`,
  },
  {
    id: 2,
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/InversionLogo.png`,
  },
  {
    id: 3,
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/ServifyLogo.png`,
  },
  {
    id: 4,
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/DeeviaLogo.png`,
  },
  {
    id: 5,
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/IncubationLogo.png`,
  },
  {
    id: 6,
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/AsylumsLogo.png`,
  },
  {
    id: 7,
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/CrowderaLogo.png`,
  },
  {
    id: 8,
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/HoneywellLogo.png`,
  },
  {
    id: 9,
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/HPLogo.png`,
  },
];

const COLLABORATORS = [
  {
    id: 1,
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/EDLogo.png`,
  },
  {
    id: 2,
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/TeknoLogo.png`,
  },
  {
    id: 3,
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/YourStoryLogo.png`,
  },
  {
    id: 3,
    imageSrc: `${process.env.PUBLIC_URL}/assets/images/ItsaiLogo.png`,
  },
];

// Team
const TEAM = [
  { id: 1, image: '', name: 'John Doe', position: 'Position' },
  { id: 2, image: '', name: 'John Doe', position: 'Position' },
  { id: 3, image: '', name: 'John Doe', position: 'Position' },
  { id: 4, image: '', name: 'John Doe', position: 'Position' },
  { id: 5, image: '', name: 'John Doe', position: 'Position' },
  { id: 6, image: '', name: 'John Doe', position: 'Position' },
  { id: 7, image: '', name: 'John Doe', position: 'Position' },
  { id: 8, image: '', name: 'John Doe', position: 'Position' },
  { id: 9, image: '', name: 'John Doe', position: 'Position' },
  { id: 10, image: '', name: 'John Doe', position: 'Position' },
];

export {
  ABOUT_SUB_SECTIONS,
  PREVIOUS_FIGURES,
  SECTION_ANCHORS,
  COLLABORATORS,
  CASE_PARTNERS,
  LICENSE_KEY,
  NAV_LINKS,
  HELP_TEXT,
  SPONSORS,
  TRACKS,
  TEAM,
};

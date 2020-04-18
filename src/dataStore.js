// All constant data/text is imported from this file for a scalable workflow

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

export { ABOUT_SUB_SECTIONS, SECTION_ANCHORS, LICENSE_KEY, NAV_LINKS };

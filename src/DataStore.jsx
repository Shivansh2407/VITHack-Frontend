// All constant data/text is imported from this file for a scalable workflow

import React from 'react'
import { v4 as uuid } from 'uuid'

// Fullpage.js License:
const LICENSE_KEY = 'OPEN-SOURCE-GPLV3-LICENSE'

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
]

// Nav Links:
const NAV_LINKS = [
  {
    id: uuid(),
    text: 'Blog',
    url: 'https://medium.com/@VIT_Hack',
  },
  { id: uuid(), text: 'Tracks', url: '#tracks' },
  { id: uuid(), text: 'Essentials', url: '#essentials' },
  { id: uuid(), text: 'Contact Us', url: '#contact' },
]

// Ham Links:
const HAM_LINKS = [
  {
    id: uuid(),
    text: 'Home',
    url: '/',
  },
  {
    id: uuid(),
    text: 'Blog',
    url: 'https://medium.com/@VIT_Hack',
  },
  { id: uuid(), text: 'About Us', url: '#about' },
  { id: uuid(), text: 'Tracks', url: '#tracks' },
  { id: uuid(), text: 'Contact Us', url: '#contact' },
  { id: uuid(), text: 'Essentials', url: '#essentials' },
]

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
]

// About Section
const ABOUT_HACK_SUB_SECTIONS = [
  {
    id: uuid(),
    heading: 'VIT Hack is now online!',
    text:
      'With the ongoing threat of COVID-19, the whole of the country finds itself in an endless lockdown and everything seems to have come to a halt. Not to worry though, as the ultimate festival celebrating the confluence of technology and innovation, VITHack 2020, shall now be conducted online! The same technical magnificence, ground-breaking ideas and invaluable exposure to several industries, just one click away! VITHack 2020, unhindered by a global pandemic, brings to you the unmissable opportunity of being a part of an innovative juggernaut, within the safety of your homes.',
    showLess: true,
  },
  {
    id: uuid(),
    heading: 'About the Community',
    text:
      'Teaching, helping and collaborating on different projects have brought the members, even closer. Through VIT Hack, we hope to continue the thread of that same sense of community among all its members.',
  },
]

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
    stat: '123',
    text: 'Winners',
    color: 'text-hack-green',
  },
  {
    id: uuid(),
    stat: '20+',
    text: 'Involved States',
    color: 'text-hack-yellow',
  },
  {
    id: uuid(),
    stat: '36+',
    text: 'Paid Internships',
    color: 'text-hack-pink',
  },
  { id: uuid(), stat: '36', text: 'Hours', color: 'text-hack-green' },
]

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
]

// Help Us Out
const HELP_TEXT = {
  heading: 'Campus Ambassadors',
  text:
    'There’s more to college than a degree and grades, be a part of something big. VITHack isn’t just a college hackathon, it’s a phenomenon. Help us get the word out to your college and become a trendsetter!',
}

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
]

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
]

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
]

// Team
const HEADS = [
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Shaanvi.jpg`,
    name: 'Shaanvi Mehta',
    position: 'Co-Director',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Pranav.jpg`,
    name: 'Pranav Sharma',
    position: 'Director',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Naynika.jpg`,
    name: 'Naynika Wason',
    position: 'Co-Director',
  },
]

const TEAM = [
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Tony.jpg`,
    name: 'Tony Jacob',
    position: 'Collaboration',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Madhav.jpg`,
    name: 'Madhav Rajesh',
    position: 'Collaboration',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Priya.jpg`,
    name: 'Priya Thupalli',
    position: 'Logistics',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Shreyansh.jpg`,
    name: 'Shreyansh Ojha',
    position: 'Logistics',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Sparsh.jpg`,
    name: 'Sparsh Srivastava',
    position: 'Technical',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Lakshay.jpg`,
    name: 'Lakshay Almadi',
    position: 'Participants',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Tanya.jpg`,
    name: 'Tanya Warrier',
    position: 'Participants',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Aman.jpg`,
    name: 'Aman Lalchandani',
    position: 'Design',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Shubham.jpg`,
    name: 'Shubham Srivastava',
    position: 'Sponsors',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Kritika.jpg`,
    name: 'Kritika Sharma',
    position: 'Marketing',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Chavi.jpg`,
    name: 'Chavi Agarwal',
    position: 'Content',
  },
]

const TEAM_MOBILE = [
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Pranav.jpg`,
    name: 'Pranav Sharma',
    position: 'Director',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Shaanvi.jpg`,
    name: 'Shaanvi Mehta',
    position: 'Co-Director',
  },

  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Naynika.jpg`,
    name: 'Naynika Wason',
    position: 'Co-Director',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Kritika.jpg`,
    name: 'Kritika Sharma',
    position: 'Marketing',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Madhav.jpg`,
    name: 'Madhav Rajesh',
    position: 'Collaboration',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Tony.jpg`,
    name: 'Tony Jacob',
    position: 'Collaboration',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Priya.jpg`,
    name: 'Priya Thupalli',
    position: 'Logistics',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Shreyansh.jpg`,
    name: 'Shreyansh Ojha',
    position: 'Logistics',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Sparsh.jpg`,
    name: 'Sparsh Srivastava',
    position: 'Technical',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Aman.jpg`,
    name: 'Aman Lalchandani',
    position: 'Design',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Lakshay.jpg`,
    name: 'Lakshay Almadi',
    position: 'Participants',
  },
  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Tanya.jpg`,
    name: 'Tanya Warrier',
    position: 'Participants',
  },

  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Shubham.jpg`,
    name: 'Shubham Srivastava',
    position: 'Sponsors',
  },

  {
    id: uuid(),
    image: `${process.env.PUBLIC_URL}/assets/images/Chavi.jpg`,
    name: 'Chavi Agarwal',
    position: 'Content',
  },
]

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
]

// Footer
const FOOTER_LINKS = [
  {
    id: uuid(),
    text: 'Brochure',
    link: `${process.env.PUBLIC_URL}/assets/pdfs/Brochure.pdf`,
  },
  { id: uuid(), text: 'FAQs', link: `${process.env.PUBLIC_URL}/faqs` },
  {
    id: uuid(),
    text: 'Privacy Policy',
    link: `${process.env.PUBLIC_URL}/assets/pdfs/PrivacyPolicy.pdf`,
  },
  {
    id: uuid(),
    text: 'Terms and Conditions',
    link: `${process.env.PUBLIC_URL}/assets/pdfs/TermsAndConditions.pdf`,
  },
  {
    id: uuid(),
    text: 'The Team',
    link: `${process.env.PUBLIC_URL}/team`,
  },
]

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
      'Yes. Continuous online mentoring would be provided by industrial experts to help execute your idea better. After all, VIT Hack is not just a hackathon, rather a hub where innovative minds think alike.',
  },
]

const CA_FAQ_SUB_SECTIONS = [
  {
    id: uuid(),
    heading: 'How to Apply?',
    text:
      "It's quick and simple but it opens you to a world of opportunities. All you need to do to join us in this amazing journey is fill the Campus Ambassador form at <link> and click on submit!",
  },
]

const CA_FAQ = [
  {
    id: uuid(),
    heading: 'What does a campus ambassador do?',
    text: (
      <>
        The primary role of a campus ambassador is to represent our event in
        your college. It would be your responsibility to spread the word and get
        more participation from your college for VITHack.
      </>
    ),
  },
  {
    id: uuid(),
    heading: 'How can I promote VIT Hack in my college?',
    text: (
      <>
        You can do so by keeping an active profile across all social media
        platforms and spreading the word among your friends to become a part of
        one of the largest hackathons in the country.
      </>
    ),
  },
  {
    id: uuid(),
    heading: 'What is the application process after my submission?',
    text: (
      <>
        Every application will be thoroughly reviewed and if selected, we will
        contact and let you know through email.
      </>
    ),
  },
  {
    id: uuid(),
    heading:
      'Whom should I contact if I have more doubts regarding this program?',
    text: (
      <>
        You can reach out to us through{' '}
        <a
          href='mailto:participants@vithack.in'
          className='text-hack-blue hover:underline'
        >
          participants@vithack.in{' '}
        </a>
        and we’ll try to get back to you as soon as possible.
      </>
    ),
  },
  {
    id: uuid(),
    heading:
      'What is the eligibility criteria required to become a campus ambassador?',
    text: (
      <>
        As long as you’re a student of that college, you’re eligible to become
        its campus ambassador.
      </>
    ),
  },
]

const CA_HELP_TEXT = {
  text:
    'An imaginative mind, a zest to communicate and tons of energy! That’s all it takes to be a Campus Ambassador at VITHack. As a Campus Ambassador title you’ll have first-hand access to all the happenings at VITHack, you’ll get to set trends and be the talk of your college, you’ll get to organize campus-specific events catered to the liking of your college. Share ideas from your college community with ours, in exchange for exciting avenues.',
}

export {
  TEAM_MOBILE,
  HEADS,
  ABOUT_SUB_SECTIONS,
  ABOUT_HACK_SUB_SECTIONS,
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
  CA_FAQ,
  CA_FAQ_SUB_SECTIONS,
  CA_HELP_TEXT,
  TRACKS,
  TEAM,
  HAM_LINKS,
}

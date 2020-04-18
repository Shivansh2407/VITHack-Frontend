// Animates VIT Hack Logo in the preloader

import gsap from 'gsap';

const animateVITHackLogo = (b2, b3, b4) => {
  const tl = gsap.timeline();
  tl.to(b2.current, { opacity: 1, duration: 1, delay: 1 })
    .to(b3.current, {
      opacity: 1,
      duration: 1,
    })
    .to(b4.current, {
      opacity: 1,
      duration: 1,
    });
};

export default animateVITHackLogo;

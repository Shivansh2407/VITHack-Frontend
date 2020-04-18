// Animates the preloader screen

import gsap from 'gsap';

const animatePreloader = (preLoaderScreen, logo) => {
  const tl = gsap.timeline();
  tl.to(logo.current, { scale: 0.5, top: '38px', duration: 1, delay: 4 }).to(
    preLoaderScreen.current,
    {
      opacity: 0,
      display: 'none',
      duration: 1,
    }
  );
};

export default animatePreloader;

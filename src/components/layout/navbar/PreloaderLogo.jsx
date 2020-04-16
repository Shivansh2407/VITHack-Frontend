import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PreloaderLogo = () => {
  const batch1 = useRef(null);
  const batch2 = useRef(null);
  const batch3 = useRef(null);
  const batch4 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(batch2.current, { opacity: 1, duration: 1, delay: 1 })
      .to(batch3.current, {
        opacity: 1,
        duration: 1,
      })
      .to(batch4.current, {
        opacity: 1,
        duration: 1,
      });
  }, []);

  return (
    <svg
      width='110'
      height='56'
      viewBox='0 0 110 56'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0)' ref={batch1}>
        <path
          d='M23.5035 55.0539V37.5189L35.1172 30.7236V27.6482H15.8374L0 43.4402V55.0539H23.5035Z'
          fill='#0085F4'
        />
      </g>
      <g clipPath='url(#clip1)' ref={batch2} className='opacity-0'>
        <path
          d='M50.8449 0.415222V35.7172L39.0918 29.0166V7.16516L50.8449 0.415222Z'
          fill='#006CC4'
        />
        <path
          d='M27.233 39.572L39.0918 32.7183L50.8481 39.572V55.2895H27.233V39.572Z'
          fill='#006CC4'
        />
      </g>
      <g clipPath='url(#clip2)' ref={batch3} className='opacity-0'>
        <path
          d='M54.466 14.6802L67.383 22.146V39.2237L54.466 46.5106V14.6802Z'
          fill='#0085F4'
        />
        <path
          d='M54.466 50.3466L78.3437 36.7812V55.1675H54.466V50.3466Z'
          fill='#0085F4'
        />
      </g>
      <g clipPath='url(#clip3)' ref={batch4} className='opacity-0'>
        <path
          d='M86.8992 36.6747L86.8564 55.0539H105.232L86.8992 36.6747Z'
          fill='#006CC4'
        />
        <path
          d='M70.6792 37.2012L77.4609 33.3756H88.2421L109.999 55.1343L109.995 43.424L94.2074 27.6482H70.6766L70.6792 37.2012Z'
          fill='#0885E4'
        />
        <path
          d='M86.8992 36.6747H81.5563V55.0539H86.8538L86.8992 36.6747Z'
          fill='#006CC4'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect y='27.6482' width='35.1172' height='27.4057' fill='white' />
        </clipPath>
        <clipPath id='clip1'>
          <rect
            x='27.233'
            y='0.415222'
            width='23.6118'
            height='54.8723'
            fill='white'
          />
        </clipPath>
        <clipPath id='clip2'>
          <rect
            x='54.466'
            y='14.6801'
            width='23.8796'
            height='40.4873'
            fill='white'
          />
        </clipPath>
        <clipPath id='clip3'>
          <rect
            x='70.6766'
            y='27.6482'
            width='39.3234'
            height='27.4848'
            fill='white'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PreloaderLogo;

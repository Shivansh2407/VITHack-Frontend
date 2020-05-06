import React, { useEffect, useRef } from 'react';

// Utility functions
import animateVITHackLogo from '../../../utils/animateVITHackLogo';

const VitHackLogo = () => {
  const batch1 = useRef(null);
  const batch2 = useRef(null);
  const batch3 = useRef(null);
  const batch4 = useRef(null);

  useEffect(() => {
    animateVITHackLogo(batch2, batch3, batch4);
  }, []);

  return (
    <svg
      width='110'
      height='56'
      viewBox='0 0 110 56'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='z-30'
    >
      <g fill='white' ref={batch1}>
        <path
          d='M23.5035 55.4056V37.8707L35.1172 31.0754V28H15.8374L0 43.792V55.4056H23.5035Z'
          fill='#0085F4'
        />
      </g>
      <g fill='white' ref={batch2} className='opacity-0'>
        <path
          d='M27 39.6568L38.8588 32.8031L50.6151 39.6568V55.3742H27V39.6568Z'
          fill='#006CC4'
        />
        <path
          d='M50.6118 0.5V35.802L38.8588 29.1013V7.24994L50.6118 0.5Z'
          fill='#006CC4'
        />
      </g>
      <g fill='white' ref={batch3} className='opacity-0'>
        <path d='M54 15L66.917 22.4658V39.5436L54 46.8304V15Z' fill='#0085F4' />
        <path
          d='M54 50.6664L77.8777 37.101V55.4873H54V50.6664Z'
          fill='#0085F4'
        />
      </g>
      <g fill='white' ref={batch4} className='opacity-0'>
        <path
          d='M86.1782 55.4033H80.8781V37.0264H86.2219L104.551 55.4033H86.1782Z'
          fill='#006CC4'
        />
        <path
          d='M70.0026 37.5522L76.7837 33.7269H87.5639L109.319 55.4837L109.315 43.7744L93.5287 28H70L70.0026 37.5522Z'
          fill='#0885E4'
        />
      </g>
    </svg>
  );
};

export default VitHackLogo;

import React from 'react';

// Data
import { PREVIOUS_FIGURES } from '../../DataStore';

const PreviousFigures = () => (
  <div className='w-full px-4 sm:px-35'>
    <h4 className='text-sm-sub-heading sm:text-sub-heading font-bold capitalize mt-8 mx-auto px-4 sm:p-0'>
      Previous Edition Statistics
    </h4>
    <div className='flex flex-wrap md:flex-no-wrap justify-center xsm:justify-between items-stretch my-8 sm:px-20 md:p-0'>
      {PREVIOUS_FIGURES.map((info, index) => (
        <div
          key={info.id}
          className='flex flex-col justify-end items-center w-40'
        >
          <div
            className={`text-center mt-4 sm:m-0 ${
              index === 3
                ? 'text-sm-sub-heading sm:text-sub-heading leading-6 px-8'
                : 'text-sm-title sm:text-title'
            } ${info.color}`}
          >
            {info.stat}
          </div>
          <div>{info.text}</div>
        </div>
      ))}
    </div>
  </div>
);

export default PreviousFigures;

import React from 'react';

// Data
import { PREVIOUS_FIGURES } from '../../DataStore';

const PreviousFigures = () => (
  <div className='w-full px-4 sm:px-35'>
    <h4 className='text-sm-sub-heading sm:text-sub-heading font-bold capitalize mt-8 mx-auto px-4 sm:p-0'>
      Previous Edition Statistics
    </h4>
    <div
      className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 my-8'
      style={{ justifyItems: 'center' }}
    >
      {PREVIOUS_FIGURES.map((info) => (
        <div
          key={info.id}
          className='flex flex-col justify-end items-center w-40'
        >
          <div
            className={`text-center mt-4 text-sm-title sm:text-title sm:m-0 ${info.color}`}
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

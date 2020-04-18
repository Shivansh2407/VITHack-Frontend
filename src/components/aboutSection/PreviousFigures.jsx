import React from 'react';

// Data
import { PREVIOUS_FIGURES } from '../../DataStore';

const PreviousFigures = () => (
  <div className='w-full px-35'>
    <h4 className='text-2xl font-bold capitalize mt-8'>
      Previous Edition Statistics
    </h4>
    <div className='flex justify-between items-stretch my-8'>
      {PREVIOUS_FIGURES.map((info, index) => (
        <div
          key={info.id}
          className='flex flex-col justify-end items-center w-40'
        >
          <div
            className={`text-center ${
              index === 3 ? 'text-3xl leading-8' : 'text-5xl'
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

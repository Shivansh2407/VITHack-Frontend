import React from 'react';

const PreviousFigures = () => {
  const figures = [
    { id: 1, stat: '₹6.15L', text: 'Worth Prices', color: 'text-hack-yellow' },
    { id: 2, stat: '2942', text: 'Registrations', color: 'text-hack-pink' },
    { id: 3, stat: '20+', text: 'Involved States', color: 'text-hack-green' },
    { id: 4, stat: 'INCUB ATION', text: 'Support', color: 'text-hack-yellow' },
    { id: 5, stat: '36+', text: 'Paid Internships', color: 'text-hack-pink' },
    { id: 6, stat: '36', text: 'Hours', color: 'text-hack-green' },
  ];

  return (
    <div className='px-35 w-full'>
      <h4 className='text-2xl font-bold mt-8'>Previous Version Figures</h4>
      <div className='flex justify-evenly items-stretch my-8'>
        {figures.map((info, index) => (
          <div
            key={info.id}
            className='flex flex-col justify-end items-center w-32'
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
};

export default PreviousFigures;

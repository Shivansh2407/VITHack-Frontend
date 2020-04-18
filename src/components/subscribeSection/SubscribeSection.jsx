import React from 'react';

// Components
import SubSection from '../layout/SubSection';

const SubscribeSection = () => {
  const subSections = [
    {
      id: 1,
      text:
        'Be a part of the movement and receive regular updates by subscribing to our newsletter!',
    },
  ];

  return (
    <section className='section text-hack-black flex flex-col justify-center items-center mx-auto relative overflow-hidden'>
      <div className='w-screen h-20' />
      <section className='flex justify-center'>
        <div className='pl-35 font-bold flex items-center text-center'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {subSections.map((subSection) => (
            <SubSection key={subSection.id} text={subSection.text} />
          ))}
        </div>
      </section>
      <div className='text-center'>
        <input
          type='Email'
          className='rounded-sm py-2 px-8 border border-hack-blue'
          placeholder='Email Here'
          name='Email'
          style={{ borderColor: '#008DFF', borderWidth: 1, marginBottom: 20 }}
        />
        <br />
        <br />
        <button
          className='bg-hack-blue text-white py-2 px-8 rounded-sm font-bold'
          type='button'
        >
          Subscribe
        </button>
      </div>
      <br />
      <div className='flex justify-center'>
        <div>
          <a className='text-hack-blue' href={process.env.PUBLIC_URL}>
            FAQs
          </a>{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div>
          <a className='text-hack-blue' href={process.env.PUBLIC_URL}>
            Brochure
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div>
          <a className='text-hack-blue' href={process.env.PUBLIC_URL}>
            Terms & Conditions
          </a>{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div>
          <a className='text-hack-blue' href={process.env.PUBLIC_URL}>
            Privacy Policy
          </a>
        </div>
      </div>
      <div className='w-screen h-32' />
    </section>
  );
};

export default SubscribeSection;

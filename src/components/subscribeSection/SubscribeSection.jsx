import React, { useState } from 'react';
import { useAlert } from 'react-alert';

// Components
import { ReactComponent as PaperMa } from '../vectors/PaperMa.svg';
import { ReactComponent as Jack } from '../vectors/Jack.svg';

// Utility Functions
import subscribe from '../../utils/subscribe';

// Data
import { FOOTER_LINKS } from '../../DataStore';

const SubscribeSection = () => {
  const alert = useAlert();
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    subscribe(email)
      .then(() => {
        setEmail('');
        alert.show('Success', {
          type: 'success',
        });
      })
      .catch((err) =>
        alert.show(err.message, {
          type: 'error',
        })
      );
  };

  return (
    <section className='section text-hack-black flex flex-col justify-center items-center relative overflow-hidden cursor-default sm:text-base mx-auto'>
      <div className='w-screen h-8 md:h-32' />
      <section className='flex justify-center items-center -mt-8'>
        <div className='sm:w-2/3 md:w-1/2 text-sm-sub-heading sm:text-sub-heading font-bold flex items-center text-center mb-16 px-8 sm:px-20'>
          Be a part of the movement and receive regular updates by subscribing
          to our newsletter!
        </div>
      </section>
      <form
        className='flex flex-col justify-center items-center -mt-8'
        autoComplete='off'
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type='email'
          className='rounded py-2 px-6 border border-hack-blue sm:w-full border-2 border-hack-blue mb-8'
          placeholder='Email Here'
          name='email'
          onChange={(e) => handleChange(e)}
          value={email}
        />
        <button
          className='bg-hack-blue text-white rounded font-bold capitalize  py-2 px-8'
          type='submit'
        >
          Subscribe
        </button>
      </form>
      <div className='h-32 w-screen' />
      <footer className='flex flex-row flex-wrap justify-center absolute bottom-0 w-screen mb-4 px-8 sm:p-0'>
        {FOOTER_LINKS.map((link) => (
          <a
            className='text-hack-blue cursor-not-allowed opacity-50 text-center mx-4'
            href={link.link}
            key={link.id}
          >
            {link.text}
          </a>
        ))}
      </footer>
      <Jack />
      <PaperMa />
    </section>
  );
};

export default SubscribeSection;

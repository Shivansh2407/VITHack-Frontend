import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';

// Components
import { ReactComponent as PaperMa } from '../vectors/PaperMa.svg';
import { ReactComponent as Jack } from '../vectors/Jack.svg';
import { ReactComponent as Grass } from '../vectors/Grass.svg';

// Utility Functions
import subscribe from '../../utils/subscribe';

// Data
// import { FOOTER_LINKS } from '../../DataStore';

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
        alert.show('Successfully subscribed to mail list', {
          type: 'success',
        });
      })
      .catch((err) =>
        alert.show(err.message, {
          type: 'error',
        })
      );
  };

  useEffect(() => {
    return () => {
      sessionStorage.removeItem('token');
    };
  }, []);

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
      <div className='h-8 sm:h-32 w-screen' />
      <div className='flex flex-col sm:flex-row justify-center items-center opacity-50 leading-2 sm:leading-5 text-sm-footer sm:text-footer mb-2'>
        <div>This site is protected by reCAPTCHA and the Google</div>
        <div>
          &nbsp;
          <a
            href='https://policies.google.com/privacy'
            className='text-hack-blue cursor-pointer hover:underline'
          >
            Privacy Policy
          </a>{' '}
          and{' '}
          <a
            href='https://policies.google.com/terms'
            className='text-hack-blue cursor-pointer hover:underline'
          >
            Terms of Service
          </a>{' '}
          apply.
        </div>
      </div>
      <Grass />
      <Jack />
      <PaperMa />
    </section>
  );
};

export default SubscribeSection;

import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ children }) => (
  <header className='font-bold text-sm-heading sm:text-heading mt-20 sm:w-7/12'>
    {children}
  </header>
);

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading;

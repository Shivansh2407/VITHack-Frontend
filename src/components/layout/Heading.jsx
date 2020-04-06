import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ children }) => {
  return (
    <header className='font-bold text-4xl mt-20 w-7/12'>{children}</header>
  );
};

export default Heading;

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};

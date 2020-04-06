import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ text, url }) => {
  return (
    <a href={url} className='hover:text-hack-blue cursor-pointer'>
      {text}
    </a>
  );
};

export default NavLink;

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ text, url }) => {
  if (text === 'Blog') {
    return (
      <a
        className='hover:text-hack-blue cursor-pointer capitalise'
        href={url}
        target='_blank'
        rel='noopener noreferrer'
      >
        {text}
      </a>
    );
  }

  return (
    <a className='hover:text-hack-blue cursor-pointer capitalise' href={url}>
      {text}
    </a>
  );
};

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NavLink;

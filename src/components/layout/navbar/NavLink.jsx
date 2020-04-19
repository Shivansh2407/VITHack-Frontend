import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ anchor, text, url }) => {
  if (text === 'Blog') {
    return (
      <a
        className='hover:text-hack-blue cursor-pointer capitalise'
        data-menuanchor={anchor}
        href={url}
        target='_blank'
        rel='noopener noreferrer'
      >
        {text}
      </a>
    );
  }

  return (
    <a
      className={`capitalise ${
        text === 'Tracks'
          ? 'cursor-not-allowed opacity-50'
          : 'cursor-pointer hover:text-hack-blue'
      }`}
      data-menuanchor={anchor}
      href={url}
    >
      {text}
    </a>
  );
};

NavLink.propTypes = {
  anchor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NavLink;

import React from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
    <div className='hover:text-hack-blue cursor-pointer capitalise'>
      <AnchorLink href={url}>{text}</AnchorLink>
    </div>
  );
};

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NavLink;

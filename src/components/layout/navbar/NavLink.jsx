import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ anchor, text, url }) => {
  return (
    <a
      className='hover:text-hack-blue cursor-pointer'
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

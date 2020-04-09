import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ text, url, anchor }) => {
  return (
    <a
      href={url}
      className='hover:text-hack-blue cursor-pointer'
      data-menuanchor={anchor}
    >
      {text}
    </a>
  );
};

export default NavLink;

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  anchor: PropTypes.string.isRequired,
};

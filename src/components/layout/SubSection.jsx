import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SubSection = ({ text, heading, showLess, pink }) => {
  const [showText, setShowText] = useState(!showLess);

  const handleClick = () => setShowText(!showText);

  return (
    <div className='w-full md:w-7/12 my-12'>
      <h4
        className={`text-sm-sub-heading sm:text-sub-heading font-bold mt-8 ${
          pink && 'text-hack-pink'
        }`}
      >
        {heading}
      </h4>
      <p className='my-4'>
        {showText ? text : text.replace(/^(.{330}[^\s]*).*/, '$1')}
      </p>
      {showLess && (
        <button
          className='cursor-pointer text-hack-blue hover:underline w-auto inline-block font-bold focus:outline-none'
          onClick={handleClick}
          type='button'
        >
          {`View ${showText ? 'less' : 'more'}`}
        </button>
      )}
    </div>
  );
};

SubSection.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.any),
  ]).isRequired,
  heading: PropTypes.string.isRequired,
  showLess: PropTypes.bool,
  pink: PropTypes.bool,
};

SubSection.defaultProps = {
  showLess: false,
  pink: false,
};

export default SubSection;

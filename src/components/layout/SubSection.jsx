import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SubSection = ({ text, heading, showLess }) => {
  const [showText, setShowText] = useState(!showLess);

  const handleClick = () => setShowText(!showText);

  return (
    <div className='my-16 w-7/12'>
      <h4 className='text-2xl font-bold mt-8'>{heading}</h4>
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

export default SubSection;

SubSection.propTypes = {
  text: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  showLess: PropTypes.bool.isRequired,
};

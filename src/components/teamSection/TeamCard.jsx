import React from 'react';
import PropTypes from 'prop-types';

const TrackCard = ({ name, position }) => {
  return (
    <div className='mx-12 my-4 w-32 h-40 flex-shrink-0 flex flex-col justify-evenly items-center'>
      <div className='border-2 border-black rounded-full w-20 h-20' />
      <div>{name}</div>
      <div>{position}</div>
    </div>
  );
};

TrackCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default TrackCard;

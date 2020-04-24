import React from 'react';
import PropTypes from 'prop-types';

const TrackCard = ({ name, position }) => (
  <div className='w-40 h-40 flex-shrink-0 flex flex-col justify-evenly items-center m-4'>
    <div className='border-2 border-black rounded-full w-24 h-24 flex-grow-0 flex-shrink-0' />
    <div>{name}</div>
    <div>{position}</div>
  </div>
);

TrackCard.propTypes = {
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TrackCard;

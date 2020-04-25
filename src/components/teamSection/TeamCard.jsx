import React from 'react';
import PropTypes from 'prop-types';

const TrackCard = ({ image, name, position }) => (
  <div className='w-40 h-40 flex-shrink-0 flex flex-col justify-evenly items-center m-4'>
    <img
      className='rounded-full w-24 h-24 flex-grow-0 flex-shrink-0'
      src={image}
      alt='Team'
    />
    <div>{name}</div>
    <div className='italic'>{position}</div>
  </div>
);

TrackCard.propTypes = {
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TrackCard;

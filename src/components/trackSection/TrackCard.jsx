import React from 'react';
import PropTypes from 'prop-types';

const TrackCard = ({ name }) => {
  return (
    <div className='mx-12 my-2 w-40 h-40 flex-shrink-0 flex flex-col justify-evenly items-center'>
      <div className='border-2 border-black rounded-full w-20 h-20' />
      <div>{name}</div>
    </div>
  );
};

TrackCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TrackCard;

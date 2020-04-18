import React from 'react';
import PropTypes from 'prop-types';

const BenefactorCard = ({ imageSrc }) => (
  <div className='w-40 h-40 flex justify-center items-center mx-24'>
    <img className='w-full' src={imageSrc} alt='Logo' />
  </div>
);

BenefactorCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default BenefactorCard;

import React from 'react'
import PropTypes from 'prop-types'

const TrackCard = ({ name, icon }) => (
  <div className='w-40 h-40 flex-shrink-0 flex flex-col justify-evenly items-center sm:mx-12 my-2'>
    <div className='w-20 h-20 flex justify-center items-center'>
      <img src={icon} alt='Track Icon' />
    </div>
    {name.split('\n').map((item, i) => {
      if (i === 0) return <div key={i}>{item}</div>
      else
        return (
          <div className='-my-4' key={i}>
            {item}
          </div>
        )
    })}
  </div>
)

TrackCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default TrackCard

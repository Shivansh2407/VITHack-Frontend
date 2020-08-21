import React from 'react'

// Components
import Heading from '../layout/Heading'
import TrackCard from './TrackCard'

// Data
import { TRACKS } from '../../DataStore'

const TrackSection = () => (
  <section
    className='section text-hack-black flex flex-col justify-center items-stretch relative overflow-hidden cursor-default sm:text-base w-full'
    id='tracks'
    data-aos='fade-up'
  >
    <div className='block w-full h-4 sm:h-20' />
    <div className='sm:px-35'>
      <div className='px-8 sm:p-0'>
        <Heading>Tracks</Heading>
      </div>
      <div
        className='grid grid-cols-2 sm:grid-cols-4 my-12 sm:px-4'
        style={{ justifyItems: 'center' }}
      >
        {TRACKS.map((track) => (
          <TrackCard name={track.name} icon={track.icon} key={track.id} />
        ))}
      </div>
      <div className='w-full flex justify-center items-center'>
        <span>*Tracks are subject to changes</span>
      </div>
    </div>
  </section>
)

export default TrackSection

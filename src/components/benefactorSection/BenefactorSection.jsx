import React from 'react'

// Components
import { ReactComponent as SponsorMan } from '../vectors/SponsorMan.svg'
import { ReactComponent as CollabMan } from '../vectors/CollabMan.svg'
import { ReactComponent as CaseLady } from '../vectors/CaseLady.svg'
import BenefactorCard from './BenefactorCard'
import Heading from '../layout/Heading'

// Data
import { CASE_PARTNERS, COLLABORATORS, SPONSORS } from '../../DataStore'

const TrackSection = () => (
  <section
    className='section text-hack-black flex flex-col justify-center items-center relative overflow-hidden cursor-default sm:text-base w-full'
    data-aos='fade-up'
  >
    <div className='sm:px-35 w-full'>
      <div className='px-8 sm:p-0'>
        <Heading>Previous Benefactors</Heading>
      </div>
      <div>
        <header className='font-bold text-sm-sub-heading sm:text-sub-heading text-center my-8 sm:my-12'>
          Our Sponsors
        </header>
        <div
          className='grid grid-cols-1 sm:grid-cols-3 px-8 sm:p-0'
          style={{ justifyItems: 'center' }}
        >
          {SPONSORS.map((sponsor) => (
            <BenefactorCard imageSrc={sponsor.imageSrc} key={sponsor.id} />
          ))}
        </div>
        <header className='px-4 sm:p-0 font-bold text-sm-sub-heading sm:text-sub-heading text-center my-8 sm:my-12'>
          Our Case Partners
        </header>
        <div
          className='grid grid-cols-2 sm:grid-cols-3 px-8 sm:p-0'
          style={{ justifyItems: 'center' }}
        >
          {CASE_PARTNERS.map((partner, index) => {
            if (window.innerWidth > 870)
              return (
                <BenefactorCard imageSrc={partner.imageSrc} key={partner.id} />
              )
            if (index < 8)
              return (
                <BenefactorCard imageSrc={partner.imageSrc} key={partner.id} />
              )
            return (
              <div className='col-span-2' key={partner.id}>
                <BenefactorCard imageSrc={partner.imageSrc} />
              </div>
            )
          })}
        </div>
        <header className='font-bold text-sm-sub-heading sm:text-sub-heading text-center my-8 sm:my-12'>
          Our Collaborators
        </header>
        <div
          className='grid grid-cols-2 px-8 sm:p-0'
          style={{ justifyItems: 'center' }}
        >
          {COLLABORATORS.map((collaborator) => (
            <BenefactorCard
              imageSrc={collaborator.imageSrc}
              key={collaborator.id}
            />
          ))}
        </div>
      </div>
    </div>
    <div className='hidden sm:block w-full h-32' />
    <SponsorMan />
    <CaseLady />
    <CollabMan />
  </section>
)

export default TrackSection

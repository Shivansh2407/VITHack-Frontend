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
        <Heading>Benefactors</Heading>
      </div>
      <div>
        <header className='font-bold text-sm-sub-heading sm:text-sub-heading text-center my-8 sm:my-12'>
          Our Sponsors
        </header>
        <div
          className='grid grid-cols-1 sm:grid-cols-2 px-8 sm:p-0'
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
          className='hidden sm:grid grid-cols-2 sm:grid-cols-3 px-8 sm:p-0'
          style={{ justifyItems: 'center' }}
        >
          {CASE_PARTNERS.map((partner, index) => {
            if (index < 3)
              return (
                <BenefactorCard imageSrc={partner.imageSrc} key={partner.id} />
              )
            else return null
          })}
        </div>
        <div
          className='hidden sm:grid grid-cols-2 sm:grid-cols-4 px-8 sm:p-0'
          style={{ justifyItems: 'center' }}
        >
          {CASE_PARTNERS.map((partner, index) => {
            if (index > 2 && index < 7)
              return (
                <BenefactorCard imageSrc={partner.imageSrc} key={partner.id} />
              )
            else return null
          })}
        </div>
        <div
          className='hidden sm:grid grid-cols-2 sm:grid-cols-3 px-8 sm:p-0'
          style={{ justifyItems: 'center' }}
        >
          {CASE_PARTNERS.map((partner, index) => {
            if (index > 6)
              return (
                <BenefactorCard imageSrc={partner.imageSrc} key={partner.id} />
              )
            else return null
          })}
        </div>
        <div
          className='grid grid-cols-2 sm:grid-cols-3 px-8 sm:p-0 sm:hidden'
          style={{ justifyItems: 'center' }}
        >
          {CASE_PARTNERS.map((partner) => (
            <BenefactorCard imageSrc={partner.imageSrc} key={partner.id} />
          ))}
        </div>
        <header className='font-bold text-sm-sub-heading sm:text-sub-heading text-center my-8 sm:my-12'>
          Our Collaborators
        </header>
        <div
          className='hidden sm:grid grid-cols-3 px-8 sm:p-0'
          style={{ justifyItems: 'center' }}
        >
          {COLLABORATORS.map((collaborator, i) => {
            if (i < 3)
              return (
                <BenefactorCard
                  imageSrc={collaborator.imageSrc}
                  key={collaborator.id}
                />
              )
            else return null
          })}
        </div>
        <div
          className='hidden sm:grid grid-cols-2 px-16 sm:p-0 md:px-40'
          style={{ justifyItems: 'center' }}
        >
          {COLLABORATORS.map((collaborator, i) => {
            if (i > 2)
              return (
                <BenefactorCard
                  imageSrc={collaborator.imageSrc}
                  key={collaborator.id}
                />
              )
            else return null
          })}
        </div>
        <div
          className='grid sm:hidden grid-cols-2 px-16 sm:p-0 md:px-40'
          style={{ justifyItems: 'center' }}
        >
          {COLLABORATORS.map((collaborator, i) => {
            if (i < 4)
              return (
                <BenefactorCard
                  imageSrc={collaborator.imageSrc}
                  key={collaborator.id}
                />
              )
            else return null
          })}
        </div>
        <div
          className='grid sm:hidden grid-cols-1 px-16 sm:p-0 md:px-40'
          style={{ justifyItems: 'center' }}
        >
          {COLLABORATORS.map((collaborator, i) => {
            if (i === 4)
              return (
                <BenefactorCard
                  imageSrc={collaborator.imageSrc}
                  key={collaborator.id}
                />
              )
            else return null
          })}
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

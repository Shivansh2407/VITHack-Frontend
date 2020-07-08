import React from 'react'

// Components
import { ReactComponent as PaperMa } from '../vectors/PaperMa.svg'
import { ReactComponent as Jack } from '../vectors/Jack.svg'
import { ReactComponent as Grass } from '../vectors/Grass.svg'

const SubscribeSection = () => {
  return (
    <section className='section text-hack-black flex flex-col justify-center items-center relative overflow-hidden cursor-default sm:text-base mx-auto'>
      <div className='w-screen h-14 md:h-96 mb-8 flex justify-center items-center'>
        <h1 className='text-hack-blue font-bold text-sm-heading sm:text-heading uppercase'>
          Coming Soon!
        </h1>
      </div>
      <Grass />
      <Jack />
      <PaperMa />
    </section>
  )
}

export default SubscribeSection

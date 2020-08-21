import React, { useState, useEffect } from 'react'

// Components
import { ReactComponent as PaperMa } from '../vectors/PaperMa.svg'
import { ReactComponent as Jack } from '../vectors/Jack.svg'
import { ReactComponent as Grass } from '../vectors/Grass.svg'

const SubscribeSection = () => {
  const [timer, setTimer] = useState({
    years: 0,
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
    millisec: 0,
  })

  const calculateCountdown = () => {
    let diff =
      (Date.parse(new Date(2020, 9, 9, 12)) - Date.parse(new Date())) / 1000

    // clear countdown when date is reached
    if (diff <= 0) return false

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    }

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400))
      diff -= timeLeft.years * 365.25 * 86400
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400)
      diff -= timeLeft.days * 86400
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600)
      diff -= timeLeft.hours * 3600
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60)
      diff -= timeLeft.min * 60
    }
    timeLeft.sec = diff

    return timeLeft
  }

  const addLeadingZeros = (value) => {
    value = String(value)
    while (value.length < 2) {
      value = '0' + value
    }
    return value
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const date = calculateCountdown()
      date ? setTimer(date) : clearInterval(interval)
    }, 1000)
    return () => clearInterval(interval)
  }, [timer])

  return (
    <section className='section text-hack-black flex flex-col justify-center items-center relative overflow-hidden cursor-default sm:text-base mx-auto'>
      <div className='w-full md:h-96 mb-8 flex justify-center items-center'>
        <div className='text-hack-blue text-title sm:text-display capitalize flex justify-center items-center md:mb-24'>
          <div className='flex flex-col justify-center items-center'>
            <span>{addLeadingZeros(timer.days)}</span>
            <span className='text-base sm:text-sub-heading font-bold'>
              Days
            </span>
          </div>
          <span className='inline-block relative transform -translate-y-5 sm:-translate-y-6 mx-1 sm:mx-3'>
            :
          </span>
          <div className='flex flex-col justify-center items-center'>
            <span>{addLeadingZeros(timer.hours)}</span>
            <span className='text-base sm:text-sub-heading font-bold'>
              Hours
            </span>
          </div>
          <span className='inline-block relative transform -translate-y-5 sm:-translate-y-6 mx-1 sm:mx-3'>
            :
          </span>
          <div className='flex flex-col justify-center items-center'>
            <span>{addLeadingZeros(timer.min)}</span>
            <span className='text-base sm:text-sub-heading font-bold'>
              Minutes
            </span>
          </div>
          <span className='inline-block relative transform -translate-y-5 sm:-translate-y-6 mx-1 sm:mx-3'>
            :
          </span>
          <div className='flex flex-col justify-center items-center'>
            <span>{addLeadingZeros(timer.sec)}</span>
            <span className='text-base sm:text-sub-heading font-bold'>
              Seconds
            </span>
          </div>
        </div>
      </div>
      <Grass />
      <Jack />
      <PaperMa />
    </section>
  )
}

export default SubscribeSection

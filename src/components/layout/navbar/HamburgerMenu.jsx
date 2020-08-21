import React, { useState, useRef, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import gsap from 'gsap'

// DATA
import { HAM_LINKS } from '../../../DataStore'

const HamburgerMenu = () => {
  const [isActive, setActive] = useState(false)
  const [loading, setLoading] = useState(true)

  const ham = useRef(null)
  const line1 = useRef(null)
  const line2 = useRef(null)
  const text = useRef(null)
  const close = useRef(null)
  const menu = useRef(null)
  const bg = useRef(null)
  const tl = gsap.timeline()

  useEffect(() => {
    let timer
    if (window.location.pathname === '/')
      timer = setTimeout(() => setLoading(false), 5000)
    else timer = setTimeout(() => setLoading(false), 0)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const openAnimation = () => {
    tl.to(line1.current, {
      height: 0,
      duration: 0.2,
    })
      .to(ham.current, {
        transform: 'translateY(10px)',
        duration: 0.5,
        delay: -0.2,
      })
      .to(text.current, { opacity: 1, duration: 0.4, delay: -0.5 })
      .to(ham.current, {
        transform: 'translate(40px,10px)',
        duration: 0.5,
        delay: 0.3,
      })
      .to(menu.current, {
        display: 'flex',
        opacity: 1,
        transform: 'translateY(-10px)',
        duration: 0.5,
      })
      .to(bg.current, {
        width: '200%',
        height: '200%',
        duration: 0.6,
        delay: -0.5,
      })
      .to(close.current, { width: 60, duration: 0.5, delay: -0.3 })
      .to(text.current, { opacity: 0, duration: 0.01 })
      .to(ham.current, { transform: 'translate(40px,0px)', duration: 0.01 })
      .to(line1.current, {
        height: 30,
        duration: 0.01,
      })
  }

  const closeAnimation = () => {
    tl.to(close.current, { width: 0, duration: 0.5 })
      .to(menu.current, {
        opacity: 0,
        transform: 'translateY(10px)',
        duration: 0.5,
      })
      .to(bg.current, {
        width: '0px',
        height: '0px',
        duration: 0.5,
        delay: -0.5,
      })
      .to(menu.current, { display: 'none', duration: 0.01 })
      .to(ham.current, { transform: 'translate(0px,0px)', duration: 0.5 })
  }

  return (
    <nav className='block sm:hidden fixed top-0 z-30 left-0 focus:outline-none'>
      <button
        className={`block sm:hidden z-20 fixed focus:outline-none ${
          loading && 'opacity-0'
        }`}
        style={{
          top: '50%',
          transform: 'translateY(-70%)',
          right: '0px',
        }}
        onClick={() => {
          if (!isActive) openAnimation()
          else closeAnimation()
          setActive(!isActive)
        }}
        type='button'
      >
        <svg
          width='50'
          height='101'
          viewBox='0 0 50 81'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect y='43' width='0' height='2' fill='white' ref={close} />
          <g fill='none' ref={ham}>
            <rect
              width='1.8919'
              height='30'
              transform='matrix(-1 0 0 1 16.4629 51.0001)'
              fill='black'
              ref={line1}
            />
            <rect
              width='1.8919'
              height='30'
              transform='matrix(-1 0 0 1 24.571 51.0001)'
              fill='black'
              ref={line2}
            />
            <path
              d='M28 43.731L18.883 43.731L18.883 42.768C18.883 42.54 18.994 42.399 19.216 42.345L20.152 42.228C19.738 41.892 19.399 41.514 19.135 41.094C18.871 40.674 18.739 40.188 18.739 39.636C18.739 39.024 18.91 38.529 19.252 38.151C19.594 37.767 20.056 37.491 20.638 37.323C20.308 37.191 20.023 37.023 19.783 36.819C19.543 36.609 19.345 36.375 19.189 36.117C19.033 35.859 18.919 35.586 18.847 35.298C18.775 35.004 18.739 34.707 18.739 34.407C18.739 33.927 18.817 33.501 18.973 33.129C19.123 32.751 19.345 32.433 19.639 32.175C19.933 31.911 20.296 31.71 20.728 31.572C21.154 31.434 21.643 31.365 22.195 31.365L28 31.365L28 32.976L22.195 32.976C21.481 32.976 20.941 33.132 20.575 33.444C20.203 33.756 20.017 34.206 20.017 34.794C20.017 35.058 20.065 35.31 20.161 35.55C20.251 35.784 20.386 35.991 20.566 36.171C20.746 36.351 20.974 36.495 21.25 36.603C21.52 36.705 21.835 36.756 22.195 36.756L28 36.756L28 38.367L22.195 38.367C21.463 38.367 20.917 38.514 20.557 38.808C20.197 39.102 20.017 39.531 20.017 40.095C20.017 40.491 20.125 40.857 20.341 41.193C20.551 41.529 20.839 41.838 21.205 42.12L28 42.12L28 43.731ZM22.447 22.8282C22.075 22.8282 21.736 22.8822 21.43 22.9902C21.118 23.0922 20.851 23.2452 20.629 23.4492C20.401 23.6472 20.227 23.8902 20.107 24.1782C19.981 24.4662 19.918 24.7932 19.918 25.1592C19.918 25.9272 20.143 26.5362 20.593 26.9862C21.037 27.4302 21.655 27.7062 22.447 27.8142L22.447 22.8282ZM26.722 21.5322C26.962 21.7302 27.172 21.9672 27.352 22.2432C27.526 22.5192 27.67 22.8162 27.784 23.1342C27.898 23.4462 27.982 23.7702 28.036 24.1062C28.096 24.4422 28.126 24.7752 28.126 25.1052C28.126 25.7352 28.021 26.3172 27.811 26.8512C27.595 27.3792 27.283 27.8382 26.875 28.2282C26.461 28.6122 25.951 28.9122 25.345 29.1282C24.739 29.3442 24.043 29.4522 23.257 29.4522C22.621 29.4522 22.027 29.3562 21.475 29.1642C20.923 28.9662 20.446 28.6842 20.044 28.3182C19.636 27.9522 19.318 27.5052 19.09 26.9772C18.856 26.4492 18.739 25.8552 18.739 25.1952C18.739 24.6492 18.832 24.1452 19.018 23.6832C19.198 23.2152 19.462 22.8132 19.81 22.4772C20.152 22.1352 20.578 21.8682 21.088 21.6762C21.592 21.4842 22.168 21.3882 22.816 21.3882C23.068 21.3882 23.236 21.4152 23.32 21.4692C23.404 21.5232 23.446 21.6252 23.446 21.7752L23.446 27.8682C24.022 27.8502 24.523 27.7722 24.949 27.6342C25.375 27.4902 25.732 27.2922 26.02 27.0402C26.302 26.7882 26.515 26.4882 26.659 26.1402C26.797 25.7922 26.866 25.4022 26.866 24.9702C26.866 24.5682 26.821 24.2232 26.731 23.9352C26.635 23.6412 26.533 23.3892 26.425 23.1792C26.317 22.9692 26.218 22.7952 26.128 22.6572C26.032 22.5132 25.984 22.3902 25.984 22.2882C25.984 22.1562 26.035 22.0542 26.137 21.9822L26.722 21.5322ZM20.206 17.9085C19.984 17.7105 19.783 17.5005 19.603 17.2785C19.423 17.0565 19.27 16.8225 19.144 16.5765C19.012 16.3245 18.913 16.0605 18.847 15.7845C18.775 15.5025 18.739 15.1995 18.739 14.8755C18.739 14.3775 18.823 13.9395 18.991 13.5615C19.153 13.1775 19.387 12.8595 19.693 12.6075C19.993 12.3495 20.356 12.1545 20.782 12.0225C21.208 11.8905 21.679 11.8245 22.195 11.8245L28 11.8245L28 13.4355L22.195 13.4355C21.505 13.4355 20.971 13.5945 20.593 13.9125C20.209 14.2245 20.017 14.7015 20.017 15.3435C20.017 15.8175 20.131 16.2615 20.359 16.6755C20.587 17.0835 20.896 17.4615 21.286 17.8095L28 17.8095L28 19.4205L18.883 19.4205L18.883 18.4575C18.883 18.2295 18.994 18.0885 19.216 18.0345L20.206 17.9085ZM18.883 1.88634L28 1.88634L28 2.84034C28 3.06834 27.889 3.21234 27.667 3.27234L26.686 3.39834C27.124 3.79434 27.478 4.23834 27.748 4.73034C28.012 5.22234 28.144 5.78634 28.144 6.42234C28.144 6.92034 28.063 7.36134 27.901 7.74534C27.733 8.12334 27.499 8.44134 27.199 8.69934C26.899 8.95734 26.536 9.15234 26.11 9.28434C25.684 9.41034 25.213 9.47334 24.697 9.47334L18.883 9.47334L18.883 7.87134L24.697 7.87134C25.387 7.87134 25.921 7.71534 26.299 7.40334C26.677 7.08534 26.866 6.60234 26.866 5.95434C26.866 5.48034 26.755 5.03934 26.533 4.63134C26.305 4.21734 25.993 3.83634 25.597 3.48834L18.883 3.48834L18.883 1.88634Z'
              fill='black'
              className='opacity-0'
              ref={text}
            />
          </g>
        </svg>
      </button>
      <button
        className='fixed inset-0 h-screen w-full flex flex-col justify-center items-start text-white font-bold text-sm-heading px-8 hidden opacity-0'
        ref={menu}
        style={{ transform: 'translateY(10px)' }}
        type='button'
        onClick={() => {
          if (!isActive) openAnimation()
          else closeAnimation()
          setActive(!isActive)
        }}
      >
        <div
          className='absolute bg-hack-blue rounded-full z-50'
          style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
          ref={bg}
        />
        {HAM_LINKS.map((navLink) => {
          if (navLink.text === 'Home')
            return (
              <Link
                className='cursor-pointer capitalise z-50 my-1'
                to={navLink.url}
                onClick={() => {
                  setActive(!isActive)
                }}
                key={navLink.id}
              >
                {navLink.text}
              </Link>
            )
          if (navLink.text === 'Blog' || navLink.text === "GraVITas '20") {
            return (
              <a
                className='cursor-pointer capitalise z-50 my-1'
                data-menuanchor={navLink.anchor}
                href={navLink.url}
                target='_blank'
                rel='noopener noreferrer'
                onClick={() => {
                  setActive(!isActive)
                }}
                key={navLink.id}
              >
                {navLink.text}
              </a>
            )
          }

          if (window.location.pathname !== '/')
            return (
              <Link
                className='capitalise cursor-pointer z-50 my-1'
                to={`/${navLink.url}`}
                onClick={() => {
                  setActive(!isActive)
                }}
                key={navLink.id}
              >
                {navLink.text}
              </Link>
            )

          return (
            <AnchorLink
              className='capitalise cursor-pointer z-50 my-1'
              href={navLink.url}
              onClick={() => {
                setActive(!isActive)
              }}
              key={navLink.id}
              offset='40'
            >
              {navLink.text}
            </AnchorLink>
          )
        })}
      </button>
    </nav>
  )
}

export default HamburgerMenu

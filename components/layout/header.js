import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const throttle = function (callback, waitTime) {
  let timerId = null
  return (e) => {
    if (timerId) return
    timerId = setTimeout(() => {
      callback.call(this, e)
      timerId = null
    }, waitTime)
  }
}

const Header = ({ goLine }) => {
  const [active, setActive] = useState(false)
  const [pageY, setPageY] = useState(0)
  const documentRef = typeof window !== 'undefined' && useRef(document)

  const handleScroll = () => {
    const { pageYOffset } = window
    const active = pageYOffset > 100
    setActive(active)
    setPageY(pageYOffset)
  }

  const throttleScroll = throttle(handleScroll, 50)

  useEffect(() => {
    documentRef.current.addEventListener('scroll', throttleScroll)
    return () =>
      documentRef.current.removeEventListener('scroll', throttleScroll)
  }, [pageY])

  return (
    <HeaderBlock className={active && 'on'}>
      <div className="app-inner">
        <h1 className="logo">
          <img src="/img/logo.png" alt="감각운동심리치료" />
        </h1>
        <button className="contact-btn" onClick={goLine}>
          무료상담 신청하기
        </button>
      </div>
    </HeaderBlock>
  )
}

export default Header

const HeaderBlock = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-top: 7rem;
  transition: all 0.4s ease;

  z-index: 999;
  .app-inner {
    max-width: 164rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 16.1rem;
    img {
      width: 100%;
      height: auto;
    }
  }

  .contact-btn {
    padding: 0 1.5em;
    height: 4.8rem;
    background: #50cfa7;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    font-weight: 600;
    color: #fff;
    transition: all 0.4s;
    visibility: hidden;
    opacity: 0;
    &:hover {
      background: #000;
      box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.2);
    }
  }

  &.on {
    padding: 2rem 0;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

    .contact-btn {
      transition-delay: 0.2s;
      visibility: visible;
      opacity: 1;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 3rem 0;
  }

  @media screen and (max-width: 768px) {
    .logo {
      width: 14rem;
    }
    .contact-btn {
      padding: 0 1.1em;
      height: 4rem;
      font-size: 1.4rem;
    }
  }
`

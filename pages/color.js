import { useState, useEffect, useRef, scrollIntoView } from 'react'
import styled from 'styled-components'
import Visual from '../components/home/visual'
import About from '../components/home/about'
import Therapy from '../components/home/therapy'
import Profile from '../components/home/profile'
import Question from '../components/home/question'
import Footer from '../components/layout/footer'
import Header from '../components/layout/header'

export default function Home() {
  const sec2Ref = useRef(null)

  const scrollToSec2 = () => {
    console.log(sec2Ref)
    sec2Ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const goLine = () => {
    if (typeof window !== 'undefined') {
      window.open('https://line.me/R/ti/p/waterweb1', '_blank')
    }
  }

  return (
    <div className="app-wrap">
      <Header goLine={goLine} />
      <Visual scrollToSec2={scrollToSec2} isColor={true} />
      <About ref={sec2Ref} isColor={true} />
      <Therapy />
      <Profile isColor={true} />
      <Question goLine={goLine} />
      <Footer />
    </div>
  )
}
const DocumentInner = styled.div`
  max-width: 120rem;
  margin: 20rem auto;
`

const NameCard = styled.div`
  text-align: center;
  margin-bottom: 2em;
  font-size: 1.8rem;
  opacity: 0.8;
  letter-spacing: -0.04em;
`
const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 24rem;
  height: 5rem;
  background: #50cfa7;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 auto;
`

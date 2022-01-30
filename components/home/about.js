import { forwardRef } from 'react'
import { Reveal, Tween } from 'react-gsap'
import styled from 'styled-components'

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <SectionBlock>
        <Reveal repeat={false} threshold={0.3}>
          <Tween from={{ opacity: 0 }} duration={0.5}>
            <div className="app-inner">
              <h3 className="title">About</h3>
              <div className="content-wrapper">
                <p className="content">
                  나는 나의 뒷 모습을 보지 못하지만 나를 보는 사람은 나의 전체
                  모습을 볼 수 있습니다. <br />
                  감기와 암의 치료방법 기간이 다르듯, 사람과 상황에 따라 당연히
                  다릅니다. <br />
                  무엇을 물어봐야하죠? 어떻게 진행해야 하나요? <br />
                  유능한 상담가는 무엇을 다뤄야 할지 잘 찾는 자입니다.
                </p>
                <p className="content">
                  나는 나의 뒷 모습을 보지 못하지만 나를 보는 사람은 나의 전체
                  모습을 볼 수 있습니다. <br />
                  감기와 암의 치료방법 기간이 다르듯, 사람과 상황에 따라 당연히
                  다릅니다.
                </p>
              </div>
              <figure className="about-poster">
                <img src="/img/about.png" alt="감각운동심리치료사 조성호" />
              </figure>
            </div>
          </Tween>
        </Reveal>
      </SectionBlock>
    </section>
  )
})
About.displayName = 'About'
export default About

const SectionBlock = styled.section`
  padding: 12rem 0;
  .title {
    float: left;
    font-family: Vollkorn, serif;
    font-weight: 700;
    font-size: 2rem;
    font-weight: 700;
  }
  .content-wrapper {
    padding-left: 50%;
    font-size: 2rem;

    .content {
      font-size: 0.9em;
      letter-spacing: -0.03em;
      color: #888;
      line-height: 1.5;
      word-break: keep-all;

      & + .content {
        margin-top: 1.5em;
      }
    }
  }
  .about-poster {
    width: 100%;
    margin-top: 18rem;
    img {
      max-width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 6rem 0;
    .content-wrapper {
      padding-left: 40%;
    }
    .about-poster {
      margin-top: 8rem;
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 3rem 0;
    .title {
      float: none;
      margin-bottom: 3em;
    }
    .content-wrapper {
      padding-left: 0;
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 3rem 0;
  }
`

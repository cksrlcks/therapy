import { useState } from 'react'
import { Reveal, Tween } from 'react-gsap'
import Button from '../ui/button'
import styled from 'styled-components'
import { useTranspileTemplateLiterals } from 'babel-plugin-styled-components/lib/utils/options'

const Question = ({ goLine }) => {
  const [advantage, setAdvantage] = useState([
    {
      title: '합리적인 선택',
      content: '쉬운 접근과 간단하고 편리한 시작',
    },
    {
      title: '절대 비밀보장',
      content: '상담 이력이 공식적으로 남지 않아요',
    },
  ])
  return (
    <SectionBlock>
      <Reveal repeat={false} threshold={0.3}>
        <Tween from={{ opacity: 0 }} duration={0.5}>
          <div className="app-inner">
            <h3 className="eng">Question</h3>
            <h2 className="title">저는 상담이 필요한 걸까요?</h2>
            <div className="desc">
              15분 무료 진단 상담을 받으세요
              <br /> 나랑 맞는 상담가인지, 내게 상담이 필요한지 부터 알아봐야죠.
            </div>
            <Button align="center" handler={goLine}>
              무료상담 신청하기
            </Button>

            <div className="advantage-wrapper">
              {advantage.map((item, index) => {
                return (
                  <div className="advantage-item" key={index}>
                    <div className="advantage-title">
                      {item.title}
                      <span className="num">0{index + 1}</span>
                    </div>
                    <div className="advantage-desc">{item.content}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </Tween>
      </Reveal>
    </SectionBlock>
  )
}

export default Question

const SectionBlock = styled.section`
  text-align: center;
  padding: 20rem 0 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .eng {
    font-weight: 500;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.01em;
    font-family: Albra, serif;
    color: #000;
    margin-bottom: 1em;
  }
  .title {
    font-size: 3rem;
    font-weight: 800;
    color: #000;
    margin-bottom: 1em;
  }
  .desc {
    font-size: 1.8rem;
    font-weight: 300;
    color: #888;
    margin-bottom: 3em;
    line-height: 1.5;
  }

  .advantage-wrapper {
    display: flex;
    justify-content: calc();
    gap: 8rem;
    margin: 14rem 0;

    .advantage-title {
      display: flex;
      align-items: flex-start;

      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 1em;
      .num {
        font-size: 1.2rem;
        padding-left: 0.4em;
        color: #888;
        font-weight: 300;
      }
    }

    .advantage-desc {
      font-size: 1.8rem;
      color: #888;
      word-break: keep-all;
      text-align: left;
      line-height: 1.3;
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 6rem 0;
    .content-wrapper {
      padding-left: 40%;
    }
  }

  @media screen and (max-width: 1024px) {
    .title {
      font-size: 2.2rem;
    }
    .desc {
      font-size: 1.6rem;
      margin-bottom: 2em;
    }
    .advantage-wrapper {
      .advantage-title {
        font-size: 1.8rem;
      }
      .advantage-desc {
        font-size: 1.6rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .advantage-wrapper {
      display: block;
      margin: 10rem 0 5rem;

      .advantage-item + .advantage-item {
        border-top: 1px solid #eee;
        padding-top: 5em;
        margin-top: 5em;
      }
    }
  }
`

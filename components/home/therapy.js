import { useState } from 'react'
import { Reveal, Tween } from 'react-gsap'
import styled from 'styled-components'

const Therapy = () => {
  const [therapy, setTherapy] = useState([
    {
      title: '상담진행 팁',
      content: [
        '초기상담은 전화 비대면 상담도 많이 효과적입니다. 일단 시작이 중요하니까요. 처음에는 뭔가 이야기 할 것들이 두서 없이 많습니다. 이야기를 하다보면 하나, 하나, 그 큰 줄기가 보입니다.',
        ' 일단, 망설이지 말고 톡 주셔요(무료진단 15분) 라인 아이디 : waterweb1',
      ],
    },
    {
      title: '비용은 얼마인가요?',
      content: [
        '전화 비대면 상담은 통화 시간으로 계산합니다. \n(1시간 기준 10만원, 10분 16,666원, 17분 상담했다면 28,322원 이런 느낌)',
        '직접 만나는 대면 상담은 1시간에 15만원, 두시간 25만원 입니다. \n(장소는 논현 센터 또는 협의해서 이동 조절 가능합니다.(서울, 일산권만 가능))',
      ],
    },
    {
      title: '상담진행 팁',
      content: [
        '본인 마음입니다. 만... 경험상 최소 3~5회가 좋습니다. 1, 2회는 본인 이야기를 많이 합니다. (그사람의 마음 시스템을 파악하는 시기) 3회 정도 부터는 즉, 마음 시스템이 파악되면 각각의 문제에 대해 진행합니다. 짧게는 5~10분, 길게는 한시간도 가능합니다.',
      ],
    },
  ])
  return (
    <section>
      <SectionBlock>
        <Reveal repeat={false} threshold={0.3}>
          <Tween from={{ opacity: 0 }} duration={0.5}>
            <div className="app-inner">
              <h3 className="title">Therapy</h3>
              <div className="content-wrapper">
                {therapy.map((item, index) => {
                  return (
                    <div className="content-group" key={index}>
                      <div className="content-title">{item.title}</div>
                      {item.content.map((content, index) => (
                        <p className="content" key={index}>
                          {content.split('\n').map((line, index) => (
                            <span key={index}>
                              {line} <br />
                            </span>
                          ))}
                        </p>
                      ))}
                    </div>
                  )
                })}
              </div>
            </div>
          </Tween>
        </Reveal>
      </SectionBlock>
    </section>
  )
}

export default Therapy

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

    .content-title {
      font-size: 1em;
      font-weight: 800;
      color: #000;
      margin-bottom: 1.8em;
    }
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

    .content-group + .content-group {
      margin-top: 5em;
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
  }

  @media screen and (max-width: 1024px) {
    .title {
      float: none;
      margin-bottom: 3em;
    }
    .content-wrapper {
      padding-left: 0;
      font-size: 1.8rem;
      .content-title {
        margin-bottom: 1em;
      }
      .content-group + .content-group {
        margin-top: 3em;
      }
    }
  }
`

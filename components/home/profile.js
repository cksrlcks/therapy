import { useState } from 'react'
import { Reveal, Tween } from 'react-gsap'
import styled from 'styled-components'

const Profile = () => {
  const [history, setHistory] = useState([
    '現 디바인 컬러코칭아카데미 대표',
    '現 한국 감성색채협회 교육이사',
    '한국아로마테라피 (2020.8)',
    '선문대 산업심리학과 졸업 (2002.2.21.)',
    '동양AMEX카드입사 및 롯데카드 퇴사 (2001.12.1.~2008.4.28. 8년)',
    '전 자연공감센터 부원장 (2008.5.1.)',
    '한국사이코드라마 소시오드라마 학회 회원 (2001.3.30)',
    '영국 컬러미러 색채심리 티쳐 (2008.8.)          ',
    '미국 아봐타코스 위져드 (2008.1.14.)',
    '미국 NLP master (2012.2.25)',
    '인도 원네스유니버시티 명상 트레이너 (2010.10.19.)',
    '가족세우기 전문가 (2012.4.25.)',
    '에니어그램 전문가 (2004.7.3.)',
  ])
  return (
    <section>
      <SectionBlock>
        <Reveal repeat={false} threshold={0.3}>
          <Tween from={{ opacity: 0 }} duration={0.5}>
            <div className="app-inner">
              <h3 className="title">Profile</h3>
              <div className="flex-box">
                <div className="left">
                  <div className="name-card">
                    <div className="job">감각운동심리치료사</div>
                    <div className="name">조성호</div>
                  </div>
                  <ul className="history-wrapper">
                    {history.map((item, index) => (
                      <li className="history-item" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="right">
                  <figure className="profile-poster">
                    <div className="frame">
                      <img
                        className="profile-img"
                        src="/img/profile_01.png"
                        alt="감각운동심리치료사 조성호"
                      />
                    </div>
                    <div className="frame">
                      <img
                        className="profile-img"
                        src="/img/profile_02.png"
                        alt="감각운동심리치료사 조성호"
                      />
                    </div>
                  </figure>
                </div>
              </div>
              <div className="cert-wrapper">
                <img
                  src="/img/cert_01.png"
                  alt="Sensorimotor Psychotherapy Instuitue"
                />
                <img src="/img/cert_02.png" alt="I-NLP Academy" />
              </div>
            </div>
          </Tween>
        </Reveal>
      </SectionBlock>
    </section>
  )
}

export default Profile

const SectionBlock = styled.section`
  padding: 12rem 0;
  .title {
    font-family: Albra, serif;
    font-size: 2rem;
    font-weight: 700;
  }

  .name-card {
    margin: 10em 0 1em;
    font-size: 2.4rem;
    .job {
      font-size: 0.583em;
      margin-bottom: 0.8em;
      color: #555;
    }
    .name {
      font-weight: 800;
    }
  }

  .history-wrapper {
    margin-top: 4em;
    font-size: 1.6rem;
    color: #888;

    .history-item {
      line-height: 1.2;
    }

    .history-item + .history-item {
      margin-top: 1em;
    }
  }
  .flex-box {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .profile-poster {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-bottom: -5rem;
    .frame:nth-child(2) {
      margin-top: 10rem;
    }
  }
  .cert-wrapper {
    margin-top: 16rem;
    text-align: center;
    img {
      max-width: 100%;
      margin: 2rem 5rem;
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 6rem 0;

    .content-wrapper {
      padding-left: 40%;
    }

    .flex-box {
      align-items: flex-start;
      justify-content: space-between;
      margin-top: 5rem;
    }
    .profile-poster {
      justify-content: center;
      margin: 0;
      .frame:nth-child(2) {
        display: none;
      }
    }
    .cert-wrapper {
      margin-top: 6rem;
    }
    .name-card {
      margin: 6rem 0 4rem;
    }
    .history-wrapper {
      margin-top: 4rem;
    }
  }

  @media screen and (max-width: 1024px) {
    .name-card {
      margin-top: 0;
    }
    .profile-poster {
      .frame {
        width: 30vw;
        height: 30vw;
        border-radius: 50%;
        overflow: hidden;
        img {
          max-width: 100%;
          margin-top: -3vw;
        }
      }
    }
    .history-wrapper {
      .history-item + .history-item {
        margin-top: 0.6em;
      }
    }
  }
`

import Button from '../ui/button'
import styled from 'styled-components'

const Visual = ({ scrollToSec2 }) => {
  return (
    <SectionBlock>
      <div className="app-inner">
        <h3 className="eng">Psychological Counseling</h3>
        <h2 className="title">인생을 바꿔볼까요</h2>
        <div className="desc">
          나는 나의 뒷 모습을 보지 못하지만
          <br /> 나를 보는 사람은 나의 전체 모습을 볼 수 있습니다
        </div>
        <Button align="center" handler={scrollToSec2}>
          시작하기
        </Button>
      </div>
      <video src="/mv_video.mp4" className="mv" muted autoPlay loop></video>
    </SectionBlock>
  )
}

export default Visual

const SectionBlock = styled.section`
  text-align: center;
  height: 100vh;
  max-height: 108rem;
  margin-bottom: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .eng {
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: -0.02em;
    font-family: Vollkorn, serif;
    font-weight: 700;
    color: #50cfa7;
    margin-bottom: 1em;
  }
  .title {
    font-size: 5.6rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5em;
  }
  .desc {
    font-size: 2rem;
    font-weight: 300;
    color: #fff;
    margin-bottom: 2em;
    line-height: 1.4;
  }
  .mv {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    object-fit: cover;
    opacity: 0.7;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 8rem;
    .title {
      font-size: 4rem;
    }
    .desc {
      font-size: 1.6rem;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 6rem;
  }
`

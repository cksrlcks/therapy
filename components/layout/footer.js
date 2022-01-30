import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterBlock>
      <div className="app-inner">
        <div className="line-contact">
          <img src="/img/icon_line.png" alt="line id" />
          Naver LINE ID : waterweb1
        </div>
        <div className="copy">
          © 2022 조성호 감각운동심리치료. All rights reserved.
        </div>
      </div>
    </FooterBlock>
  )
}

export default Footer

const FooterBlock = styled.footer`
  padding: 5rem 0;
  background: #000;
  color: #fff;

  .line-contact {
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 500;
    color: #c2c2c2;
    margin-bottom: 0.5em;
    margin-left: -0.4rem;
    img {
      width: 3.2rem;
      height: auto;
      margin-right: 0.6rem;
    }
  }
  .copy {
    font-size: 1.4rem;
    font-weight: 300;
  }

  @media screen and (max-width: 768px) {
    .line-contact {
      justify-content: center;
    }
    .copy {
      text-align: center;
    }
  }
`

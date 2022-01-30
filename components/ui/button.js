import styled from 'styled-components'

const Button = ({ align, handler, children }) => {
  return (
    <ButtonBlock onClick={handler} className={align}>
      {children}
    </ButtonBlock>
  )
}

export default Button

const ButtonBlock = styled.button`
  width: 19rem;
  height: 5.6rem;
  background: #50cfa7;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
  transition: all 0.4s;

  &.center {
    margin: 0 auto;
  }

  &:hover {
    background: #000;
    box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 1024px) {
    min-width: 14rem;
    width: auto;
    height: 5rem;
    padding: 0 1.2em;
    font-size: 1.7rem;
  }
`

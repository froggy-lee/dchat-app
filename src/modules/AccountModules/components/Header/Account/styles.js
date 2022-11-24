import styled from 'styled-components'

export const Header = styled.section`
  /* position: fixed;
  z-index: 1; */
  top: 0;
  right: 0;
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #0071e3;

  outline: none;
  border: none;
  background: none;
`

export const BackButton = styled(Button)`
  display: flex;
  align-items: center;

  .icon-back {
    display: flex;

    svg {
      transform: rotate(90deg);
    }
  }
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  color: #000000;

  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
`

export const RightButton = styled(Button)``

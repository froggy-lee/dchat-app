import styled from 'styled-components'

export const Wrapper = styled.div`
  font-weight: 400;
  font-size: 28px;
  line-height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000;
`
export const Item = styled.div`
  padding: 1rem 6rem;
  position: relative;
  @media (max-width: 900px) {
    font-size: 19px;
    padding: 1rem 4rem;
  }
  @media (max-width: 550px) {
    font-size: 19px;
    padding: 1rem 1.5rem;
  }
  &::before {
    content: '';
    position: absolute;
    background-color: #000;
    width: 1rem;
    height: 1rem;
    border-radius: 50px;
    top: 40%;
    left: 0;
    @media (max-width: 900px) {
      top: 43%;
      left: -0.5rem;
    }
    @media (max-width: 550px) {
      width: 0.7rem;
      height: 0.7rem;
      top: 45%;
    }
  }
  &:first-child {
    &::before {
      position: relative;
    }
  }
  &:hover {
    color: #f6942f;
    cursor: pointer;
  }
`
export const Line = styled.div`
  position: absolute;
  width: 50%;
  height: 40px;
  background: url('/images/icons/line-freetoearn.png') no-repeat;
  background-size: 100%;
  background-position: center;
  left: 25%;
  top: 4.2rem;
  @media (max-width: 900px) {
    top: 3.5rem;
  }
  @media (max-width: 550px) {
    width: 80%;
    left: 10%;
  }
`

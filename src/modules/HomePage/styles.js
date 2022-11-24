import styled from 'styled-components'

export const Wrapper = styled.div`
  color: #000;

  background: #fff;
  padding: 5% 2rem;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
  @media (max-width: 600px) {
    padding: 12rem 2rem;
  }
`
export const Search = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  width: 100%;
  padding: 0 2rem;
  @media (min-width: 600px) {
    display: none;
  }
`
export const Footer = styled.div`
  margin-top: 4.4rem;
`
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  img {
    @media (max-width: 500px) {
      width: 200px !important;
      height: 200px !important;
    }
  }
`
export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  line-height: 37px;
  text-align: center;
  margin-top: 4.5rem;
  @media (max-width: 900px) {
    font-size: 31px;
    line-height: 39px;
    margin-top: 5rem;
  }
`
export const Des = styled.div`
  //
  font-size: 30px;
  line-height: 34px;
  text-align: center;
  letter-spacing: -0.04em;
  width: 50%;
  margin: auto;
  margin-top: 2rem;
  @media (max-width: 900px) {
    font-size: 21px;
    line-height: 22px;
    width: 100%;
    margin-top: 4rem;
  }
`
export const ButtonStart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  button {
    font-family: 'Lato Bold';
    background: #007aff;
    border-radius: 11px;
    font-size: 30px;
    line-height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: -0.04em;
    color: #fff;
    padding: 2rem 7rem;
    border: none;
    &:hover {
      background: #f6942f;
    }
    @media (max-width: 900px) {
      font-size: 28px;
      line-height: 32px;
      padding: 2rem 6rem;
      letter-spacing: -0.04em;
    }
    img {
      padding-right: 1rem !important;
    }
    .free {
      padding-top: 0.4rem;
    }
  }
`

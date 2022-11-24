import styled from 'styled-components'

export const Wrapper = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(230, 230, 230, 0.5);
  font-family: 'Lato';

  @media (max-width: 1111px) {
    margin-top: 5rem;
  }
  @media (max-width: 600px) {
    font-size: 12px;
    margin-top: 2rem;
  }
`

export const Title = styled.div`
  font-family: 'Lato Bold';
  font-weight: 600;
  font-size: 26px;
  line-height: 37px;
  color: #e6e6e6;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`
export const WrapperContent = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  position: relative;
  @media (max-width: 1111px) {
    max-width: 500px;
    margin: auto;
  }
`
export const ImgBtc = styled.div`
  height: 238px;
  background: url('/images/btc-bg.png') no-repeat;
  background-size: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -58px;
`
export const Link = styled.div`
  text-align: center;
  margin-top: 3rem;
`
export const Des = styled.div`
  font-family: 'Lato';
  padding: 2rem 4rem;
  color: #fff;
`
export const ListSocial = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 600px) {
    margin-top: 0rem;
  }
  img {
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 600px) {
      width: 26px !important;
      height: 26px !important;
    }
  }
`
export const Share = styled.div`
  font-family: 'Lato Bold';
  background: rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  text-align: center;
  text-transform: uppercase;
  color: #e6e6e6;
  margin-top: 2rem;
  padding: 2rem;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
  }
  @media (max-width: 600px) {
    font-size: 14px;
    padding: 1rem;
  }
`

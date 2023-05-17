import styled from 'styled-components'

export const Wrapper = styled.div`
  color: #ffffff;
  font-size: 15px;
  font-family: 'Lato';
  @media (max-width: 750px) {
    font-size: 13px;
  }
  @media (max-width: 600px) {
    font-size: 9px;
  }
`
export const Title = styled.div`
  font-family: 'Lato Bold';
  font-weight: 600;
  font-size: 26px;
  line-height: 37px;
  color: #e6e6e6;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  img {
    padding-left: 1rem !important;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    img {
      width: 25px !important;
      height: 15px !important;
    }
  }
`
export const ListData = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 6rem;
  height: 238px;
  @media (max-width: 750px) {
    padding: 2.5rem;
    height: 150px;
    align-items: center;
  }
`
export const Data = styled.div``

export const Number = styled.div`
  font-family: 'Samsung Sharp Sans';
  font-weight: 400;
  font-size: 50px;
  line-height: 87px;
  @media (max-width: 750px) {
    font-size: 35px;
  }
  @media (max-width: 600px) {
    font-size: 23px;
    line-height: 35px;
  }
`
export const Des = styled.div`
  font-weight: 400;
  line-height: 23px;
  color: #e6e6e6;
`
export const Item = styled.div`
  font-family: 'Lato Bold';
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 2.3rem 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  line-height: 20px;
  margin-top: 2rem;
  @media (max-width: 700px) {
    padding: 1rem 2.5rem;
  }
`
export const Rating = styled.span`
  margin-right: 4rem;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 600px) {
    margin-right: 2rem;
    img {
      width: 12px !important;
      height: 16px !important;
      padding-top: 6px !important;
    }
  }
`
export const TigerCard = styled.span`
  color: #000000;
  padding: 0rem 1rem;
  background: #ed2024;
  border-radius: 25px;
  margin-right: 2rem;
  &:first-child {
    background: #f7932f;
  }
  &:nth-child(2) {
    background: #f26722;
  }
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 600px) {
    margin-right: 1rem;
    padding: 0.3rem 0.5rem;
  }
`
export const SpinType = styled.span`
  color: #ed2024;
  margin-right: 2rem;
  &:first-child {
    color: #ffffff;
  }
  &:nth-child(2) {
    color: #34c6f4;
  }
  &:nth-child(3) {
    color: #f26722;
  }
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 600px) {
    margin-right: 1rem;
  }
`

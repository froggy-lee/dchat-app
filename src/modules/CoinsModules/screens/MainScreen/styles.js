import styled from 'styled-components'

export const Main = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin: 10rem auto 0 auto;

  @media screen and (min-width: 1024px) {
    max-width: calc(80% - 2rem);
    margin: 15rem auto 0 auto;
  }
`

export const Container = styled.main`
  position: relative;
  padding: 2rem 0 15rem 0;
`

export const ListCoinsSlidersWrapper = styled.section`
  .coins-list-slider__icon {
    cursor: pointer;
  }
`

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h1`
  font-weight: 900;
  font-size: clamp(14px, 2vw, 26px);
  line-height: 37px;
  font-family: 'Lato Black';

  color: #fff;

  margin: 0 1.5rem 0 0;
`

export const Description = styled.p`
  font-weight: 400;
  font-size: clamp(12px, 2vw, 17px);
  line-height: 20px;
  font-family: 'Lato';

  color: #e5e5e5;
  opacity: 0.7;

  margin: 0;
`

export const ListCoinsWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  -webkit-mask: linear-gradient(#000, #0000);
  mask: linear-gradient(#000, #0000);

  &:after {
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
    content: '';
    background: linear-gradient(to bottom, transparent 0%, black 100%);
    pointer-events: none;
  }
`

export const SliderWrapper = styled.div`
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  padding: 1rem 0;
`

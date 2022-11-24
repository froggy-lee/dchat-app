import styled from 'styled-components'

export const Screen = styled.section`
  position: relative;
  width: 100%;
  max-width: 375px;
  margin: auto;
  padding: 1rem 1rem 12.5rem 1rem;

  &:before {
    content: '';

    position: fixed;
    z-index: -999;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background: #f1f0f5;
  }
`

// Hello Section

export const HelloSection = styled.div`
  position: relative;
  margin: 5rem;
`

export const HelloCircle = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: #fff;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const CircleTitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 14px;

  text-align: center;

  color: #000000;
  margin-bottom: 0;
`

export const HelloTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 18px;

  text-align: center;

  color: #000000;
  margin: 0.5rem 0;
`

// Connect Social Section

export const ConnectSocialSection = styled.div`
  position: relative;
  margin-top: 2rem;
`

export const ConnectSocialTilte = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #808080;

  margin: 0 0 0 1rem;
`

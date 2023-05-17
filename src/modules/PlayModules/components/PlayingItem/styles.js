import styled from 'styled-components'

export const PlayingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  padding: 0.5rem 0;

  &:after {
    content: '';

    position: absolute;
    width: calc(100% - 65px);
    height: 1px;
    right: 0;
    bottom: 0;

    background: #cccccc;
  }
`

export const Icon = styled.div`
  width: 55px;
  height: 55px;
  background: #f2f1f6;
  border-radius: 10px;
  margin-right: 1rem;
`

export const InfoSection = styled.div`
  display: flex;
  align-items: center;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;

  color: #000000;
  margin-bottom: 0;
`

export const description = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;

  color: #808080;
`

export const Button = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;

  color: #267ff3;
  background: #f2f1f6;

  outline: none;
  border: none;
  border-radius: 10px;

  min-width: 60px;
  padding: 0.5rem 1rem;
`

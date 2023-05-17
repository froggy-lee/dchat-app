import styled from 'styled-components'

export const PlayScreen = styled.section`
  position: relative;
  padding: 1rem 0 125px 0;
`

export const GameItem = styled.div`
  padding: 0 1rem;
`

export const GameImage = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  margin: 0 auto;

  position: relative;
  background: #f2f1f6;
  border-radius: 12px;
`

export const GameInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: auto;
  padding: 1rem;
  width: 100%;

  .info-game {
    display: flex;
    align-items: center;

    .info-game__icon {
      width: 41px;
      height: 41px;
      margin-right: 1rem;
      background: #ffffff;
      border-radius: 10px;
    }

    .info-game__info {
      .info-game__info-title {
        font-style: normal;
        font-weight: 600;
        font-size: 17px;
        line-height: 20px;

        color: #ffffff;
        margin: 0;
      }

      .info-game__info-description {
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;

        color: #ffffff;
      }
    }
  }
`

export const Button = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;

  color: #267ff3;

  min-width: 60px;
  padding: 0.5rem;
  background: #ffffff;

  border: none;
  outline: none;
  border-radius: 100px;
`

export const GameContainer = styled.div``

export const WhatPlaying = styled.div`
  margin-top: 3rem;
`

export const PlayToEarn = styled(WhatPlaying)``

export const PlayingItemSection = styled.div``

import styled from 'styled-components'

export const GameScreen = styled.section`
  position: relative;
  padding: 0 0 125px 0;
`

export const TopBanner = styled.div`
  position: relative;
`

export const Banner = styled.div`
  width: 100%;
  height: 180px;
  background: #e4e3e9;
`

export const GameIcon = styled.div`
  width: 84px;
  height: 84px;
  background: #f2f1f6;
  border-radius: 10px;

  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  margin-top: 5.5rem;

  .game-info__name {
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;

    color: #000000;
    margin: 0;
  }

  .game-info__description {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    color: #808080;
  }
`

export const Button = styled.button`
  background: #1877f2;
  outline: none;
  border-radius: 100px;
  border: none;

  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;
  min-width: 60px;
  padding: 0.5rem 1rem;
  margin: 0.5rem auto 0 auto;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
`

export const InfoItem = styled.div`
  width: 33.33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .info__title {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    text-align: center;

    color: #808080;
  }

  .info__description {
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    text-align: center;

    color: #808080;
  }

  .info__content {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    text-align: center;

    color: #808080;
  }
`

export const Rating = styled(InfoItem)``

export const Age = styled(InfoItem)``

export const Language = styled(InfoItem)``

export const GameItem = styled.div`
  margin-top: 2rem;
  padding: 0 1rem;
`

export const GameImage = styled.div`
  height: 190px;
  background: #f2f1f6;
  border-radius: 12px;

  display: flex;
  margin: 0 auto;
`

export const Content = styled.div`
  padding: 1rem 0;

  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;

  color: #808080;
`

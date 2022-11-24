import styled from 'styled-components'

export const CoinScreen = styled.section`
  position: relative;
  padding: 60px 0 125px 0;
`

export const Header = styled.div`
  position: fixed;
  z-index: 9;

  padding: 0.5rem;
  width: 100%;
  height: 55px;
  background: #f1f0f5;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 18px;
  line-height: 21px;

  margin: 0;
  color: #808080;
  cursor: pointer;

  .icon {
    display: flex;

    svg {
      transform: rotate(90deg);
    }
  }
`

export const Bookmask = styled.div``

export const CoinInfoSection = styled.section``

export const CoinInfo = styled.div`
  position: relative;
  padding: 0.5rem;
  border-bottom: 1px solid #e4e3e9;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const CoinName = styled.div``

export const Name = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 18px;

  text-transform: uppercase;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  max-width: 100px;

  display: flex;
  justify-content: space-between;
`

export const CurrencyType = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;

  text-align: right;

  color: #808080;
  margin-bottom: auto;
  margin-left: auto;
`

export const Symbol = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 75px;
`

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Price = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: right;

  color: #000000;
`

export const PricePercent = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  padding: 0.5rem;
  margin-left: auto;
  color: #fff;
  background: ${props => props.background};
  border-radius: 6px;
`

export const CoinImage = styled.div`
  position: relative;
  margin-right: 1rem;

  span {
    border-radius: 50%;
  }
`

export const CoinVolume = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const VolumeItem = styled.div`
  position: relative;
  width: 33.33%;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: start;

  .mr-auto {
    margin-right: auto !important;
  }

  .ml-auto {
    margin-left: auto !important;
  }

  .volume {
    display: flex;
    flex-direction: column;
    margin: auto;

    &:nth-child(1) {
      margin-right: auto;
    }

    &:last-child {
      margin-left: auto;
    }
  }

  .volume__title {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    letter-spacing: -0.02em;

    color: #000000;
  }

  .volume_description {
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;

    color: #808080;

    .percent {
      color: ${props => props.background};
    }
  }
`

export const TotalVolume = styled(VolumeItem)``

export const Low = styled(VolumeItem)``

export const High = styled(VolumeItem)``

export const CoinChart = styled.div`
  margin: 1rem 0;
`

export const ChartButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;
`

export const ChartButton = styled.button`
  background: ${props => (props.active ? '#F2F1F6' : 'transparent')};
  outline: none;
  border: none;

  width: 35px;
  height: 35px;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
`

export const ChartSection = styled.div``

export const MarketCapSection = styled.div``

export const MarketCap = styled.div`
  display: flex;
  padding: 1rem 0;
  border-top: 1px solid #e4e3e9;

  &:nth-child(2) {
    border-bottom: 1px solid #e4e3e9;
  }
`

export const MarketCapItem = styled(VolumeItem)`
  width: 50%;

  &:nth-child(2) {
    &:after {
      display: none;
    }
  }

  &:after {
    content: '';

    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    background: #e4e3e9;
    width: 2px;
    height: 30px;
  }

  .ml-auto {
    margin-left: auto;
  }

  .volume__wrapper {
    display: flex;
    flex-direction: column;
  }
`
// NEWS

export const NewsSection = styled.section`
  position: relative;
  padding: 1rem;
`

export const NewsTitle = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height, or 100% */

  color: #808080;
`

export const NewsList = styled.div`
  display: flex;
  flex-direction: column;
`

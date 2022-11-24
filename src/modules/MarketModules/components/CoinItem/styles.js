import styled from 'styled-components'

export const CoinItem = styled.div`
  position: relative;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const CoinIcon = styled.div`
  position: relative;
  margin-right: 1rem;
  span {
    border-radius: 50%;
  }
`

export const CoinInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 1rem;

  width: 25%;
`

export const CoinName = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 18px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  max-width: 100px;

  display: flex;
  justify-content: space-between;
`

export const CoinSymbol = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;

  color: #808080;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 75px;
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

export const LineChartSection = styled.div`
  position: relative;
  margin-right: 1rem;
  overflow: hidden;
  min-width: 100px;
  max-width: 25%;
`

export const CurrencyInfo = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 25%;
  min-width: 75px;
`

export const CurrencyValue = styled.span`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;

  text-align: right;
`

export const CurrencyPercent = styled.span`
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

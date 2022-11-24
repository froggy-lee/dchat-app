import React from 'react'
import * as S from './styles'
import Image from 'next/image'
import MarketLineChart from '../Chart/MarketLineChart'

const options = {
  elements: {
    point: {
      radius: 0.2
    }
  },
  scales: {
    xAxis: {
      ticks: {
        display: false
      },
      grid: {
        display: false,
        drawBorder: false
      }
    },
    yAxis: {
      ticks: {
        display: false
      },
      grid: {
        display: false,
        drawBorder: false
      }
    }
  }
}

const CoinItem = ({ data }) => {
  return (
    <S.CoinItem>
      <S.CoinIcon>
        <Image src={data.image} width={32} height={32} layout="fixed" alt="" />
      </S.CoinIcon>

      <S.CoinInfo>
        <S.CoinName>
          {data.symbol.toUpperCase()} {'  '}
          {/* <S.CurrencyType>USD</S.CurrencyType> */}
        </S.CoinName>
        <S.CoinSymbol>{data.name}</S.CoinSymbol>
      </S.CoinInfo>

      <S.LineChartSection>
        <MarketLineChart
          id={data.id}
          days="24h"
          currency="usd"
          borderColor={
            Math.sign(data.price_change_percentage_7d_in_currency) >= 0
              ? 'green'
              : 'red'
          }
          color={
            Math.sign(data.price_change_percentage_7d_in_currency) >= 0
              ? ['rgba(120, 201, 121, 1)', 'rgba(236, 248, 236, 1)']
              : ['rgba(223, 108, 97, 1)', 'rgba(251, 234, 231, 1)']
          }
          options={options}
        />
      </S.LineChartSection>

      <S.CurrencyInfo>
        <S.CurrencyValue>{data.current_price.toLocaleString()}</S.CurrencyValue>
        <S.CurrencyPercent
          background={
            Math.sign(data.price_change_percentage_7d_in_currency) >= 0
              ? '#65C466'
              : 'rgba(218, 84, 72, 1)'
          }
        >
          {Math.sign(data.price_change_percentage_7d_in_currency) >= 0
            ? `+${data.price_change_percentage_7d_in_currency.toFixed(2)}%`
            : `${data.price_change_percentage_7d_in_currency.toFixed(2)}%`}
        </S.CurrencyPercent>
      </S.CurrencyInfo>
    </S.CoinItem>
  )
}

export default CoinItem

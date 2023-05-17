import React, { useState, useEffect, useCallback } from 'react'
import * as S from './styles'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Arrow, BookmaskIcon } from '/public/svgs'
import Image from 'next/image'
import MarketLineChart from '/src/modules/MarketModules/components/Chart/MarketLineChart'
import { NewsItem } from '/src/modules/MarketModules/components'
import { chartButton, fakeNews } from '/src/modules/MarketModules/data'

const options = {
  responsive: true,
  scales: {
    yAxis: {
      type: 'linear',
      position: 'right',
      ticks: {
        beginAtZero: true,
        color: '#000',
        fontWeight: '600',
        font: {
          size: 16
        }
      }
    },
    xAxis: {
      ticks: {
        beginAtZero: true,
        color: '#000',
        fontWeight: '600',
        font: {
          size: 14
        }
      }
    }
  },
  elements: {
    point: {
      radius: 0
    }
  }
}

const CoinScreen = () => {
  const [data, setData] = useState({})
  const [selector, setSelector] = useState('1d')
  const router = useRouter()

  const { query } = router

  const getDataCoin = useCallback(async () => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${query.id}`)
      .then(res => {
        setData(res.data)
      })
  }, [query.id])

  useEffect(() => {
    getDataCoin()
  }, [getDataCoin])

  useEffect(() => {
    const intervalId = setInterval(() => getDataCoin(), 10000)

    // cleanup function
    return () => clearInterval(intervalId)
  }, [getDataCoin])

  return (
    <>
      <S.Header>
        <S.Title onClick={() => router.push('/market')}>
          <span className="icon">
            <Arrow color="#0071E3" />
          </span>
          Market Cap
        </S.Title>

        <S.Bookmask>
          <BookmaskIcon />
        </S.Bookmask>
      </S.Header>

      <S.CoinScreen>
        <S.CoinInfoSection>
          {/* COIN INFO */}
          <S.CoinInfo>
            <S.Info>
              <S.CoinImage>
                <Image
                  src={data?.image?.small || '/images/icons/bnb.png'}
                  width={52}
                  height={52}
                  alt=""
                />
              </S.CoinImage>

              <S.CoinName>
                <S.Name>
                  {data.symbol}
                  <S.CurrencyType>USD</S.CurrencyType>
                </S.Name>

                <S.Symbol>{data.name}</S.Symbol>
              </S.CoinName>
            </S.Info>

            <S.PriceInfo>
              <S.Price>
                {data?.market_data?.current_price?.usd.toLocaleString()}
              </S.Price>
              <S.PricePercent
                background={
                  Math.sign(
                    data?.market_data?.price_change_percentage_7d_in_currency
                      .usd
                  ) >= 0
                    ? '#65C466'
                    : 'rgba(218, 84, 72, 1)'
                }
              >
                {Math.sign(
                  data?.market_data?.price_change_percentage_7d_in_currency.usd
                ) > 0
                  ? `+${data?.market_data?.price_change_percentage_7d_in_currency.usd.toFixed(
                      2
                    )}%`
                  : `${data?.market_data?.price_change_percentage_7d_in_currency.usd.toFixed(
                      2
                    )}%`}
              </S.PricePercent>
            </S.PriceInfo>
          </S.CoinInfo>

          {/* COIN VOLUME */}
          <S.CoinVolume>
            <S.TotalVolume>
              <div className="volume">
                <span className="volume__title">
                  {data?.market_data?.total_volume?.usd.toLocaleString()}
                </span>
                <span className="volume_description">Volume 24h</span>
              </div>
            </S.TotalVolume>

            <S.Low
              background={
                Math.sign(
                  data?.market_data?.price_change_percentage_24h_in_currency
                    ?.usd
                ) >= 0
                  ? '#65C466'
                  : 'rgba(218, 84, 72, 1)'
              }
            >
              <div className="volume">
                <span className="volume__title">
                  {data?.market_data?.low_24h?.usd.toLocaleString()}
                </span>
                <span className="volume_description">
                  Low{' '}
                  <span className="percent">
                    {Math.sign(
                      data?.market_data?.price_change_percentage_24h_in_currency
                        ?.usd
                    ) >= 0
                      ? `+${data?.market_data?.price_change_percentage_24h_in_currency?.usd.toFixed(
                          2
                        )}%`
                      : `${data?.market_data?.price_change_percentage_24h_in_currency?.usd.toFixed(
                          2
                        )}%`}
                  </span>
                </span>
              </div>
            </S.Low>

            <S.High
              background={
                Math.sign(
                  data?.market_data?.price_change_percentage_7d_in_currency?.usd
                ) >= 0
                  ? '#65C466'
                  : 'rgba(218, 84, 72, 1)'
              }
            >
              <div className="volume">
                <span className="volume__title">
                  {data?.market_data?.high_24h?.usd.toLocaleString()}
                </span>
                <span className="volume_description">
                  High{' '}
                  <span className="percent">
                    {Math.sign(
                      data?.market_data?.price_change_percentage_7d_in_currency
                        ?.usd
                    ) >= 0
                      ? `+${data?.market_data?.price_change_percentage_7d_in_currency?.usd.toFixed(
                          2
                        )}%`
                      : `${data?.market_data?.price_change_percentage_7d_in_currency?.usd.toFixed(
                          2
                        )}%`}
                  </span>
                </span>
              </div>
            </S.High>
          </S.CoinVolume>

          {/* COIN CHART */}
          <S.CoinChart>
            <S.ChartButtonSection>
              {chartButton.map(item => (
                <S.ChartButton
                  key={item.selector}
                  active={item.selector === selector}
                  onClick={() => setSelector(item.selector)}
                >
                  {item.title}
                </S.ChartButton>
              ))}
            </S.ChartButtonSection>

            <S.ChartSection>
              <MarketLineChart
                id={query.id}
                days={selector}
                currency="usd"
                borderColor="green"
                color={['rgba(101, 196, 102, 1)', 'rgba(101, 196, 102, 0)']}
                options={options}
              />
            </S.ChartSection>
          </S.CoinChart>

          {/* MARKET CAP */}
          <S.MarketCapSection>
            <S.MarketCap>
              <S.MarketCapItem>
                <div className="volume__wrapper">
                  <span className="volume__title">
                    {data?.market_data?.market_cap?.usd.toLocaleString()}
                  </span>

                  <span className="volume_description">Market Cap</span>
                </div>
              </S.MarketCapItem>
              <S.MarketCapItem>
                <div className="volume__wrapper ml-auto">
                  <span className="volume__title">
                    {data?.market_data?.max_supply?.toLocaleString()}
                  </span>

                  <span className="volume_description">Max supply</span>
                </div>
              </S.MarketCapItem>
            </S.MarketCap>

            <S.MarketCap>
              <S.MarketCapItem>
                <div className="volume__wrapper">
                  <span className="volume__title">
                    {data?.market_data?.fully_diluted_valuation?.usd?.toLocaleString()}
                  </span>

                  <span className="volume_description">FDV</span>
                </div>
              </S.MarketCapItem>
              <S.MarketCapItem>
                <div className="volume__wrapper ml-auto">
                  <span className="volume__title">
                    {data?.market_data?.total_supply?.toLocaleString()}
                  </span>

                  <span className="volume_description">Total supply</span>
                </div>
              </S.MarketCapItem>
            </S.MarketCap>
          </S.MarketCapSection>
        </S.CoinInfoSection>

        {/* NEWS SECTION */}
        <S.NewsSection>
          <S.NewsTitle>News</S.NewsTitle>
          <S.NewsList>
            {fakeNews.map(news => (
              <NewsItem
                key={news.id}
                title={news.title}
                content={news.content}
                time={news.time}
              />
            ))}
          </S.NewsList>
        </S.NewsSection>
      </S.CoinScreen>
    </>
  )
}

export default CoinScreen

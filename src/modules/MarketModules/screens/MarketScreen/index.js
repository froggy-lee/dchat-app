import React, { useState, useEffect, useCallback } from 'react'
import * as S from './styles'
import axios from 'axios'
import qs from 'query-string'
import { CoinItem, Header } from '/src/modules/MarketModules/components'
import { useRouter } from 'next/router'
import { listMarketTabs } from '/src/modules/MarketModules/data'

const MarketScreen = () => {
  const [coins, setCoins] = useState([])
  const [activeTab, setActiveTab] = useState(0)

  const [filters] = useState({
    vs_currency: 'usd',
    order: 'market_cap_desc',
    page: 1,
    per_page: 20,
    sparkline: false,
    price_change_percentage: '1h,24h,7d'
  })

  const router = useRouter()

  const handleActiveTab = useCallback(
    e => {
      const index = parseInt(e.target.id, 0)
      if (index !== activeTab) {
        setActiveTab(index)
      }
    },
    [activeTab]
  )

  const getMarketCoin = useCallback(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?${qs.stringify({
          ...filters
        })}`
      )
      .then(res => {
        setCoins(res?.data)
      })
      // eslint-disable-next-line no-console
      .catch(error => console.error(error))
  }, [filters])

  useEffect(() => {
    getMarketCoin()
  }, [filters, getMarketCoin])

  useEffect(() => {
    const intervalId = setInterval(getMarketCoin(), 60000)

    // cleanup function
    return () => clearInterval(intervalId)
  }, [filters, getMarketCoin])

  return (
    <>
      <Header />
      <S.MarketScreen>
        <S.NavTabSection>
          <S.Tabs>
            {listMarketTabs.map(item => (
              <S.Tab
                key={item.id}
                id={item.id}
                active={activeTab === item.id}
                onClick={handleActiveTab}
              >
                {item.name}
              </S.Tab>
            ))}
          </S.Tabs>

          <S.ContentTabs>
            {/* All tab */}
            <S.ContentTab active={activeTab === 0}>
              <S.CoinList>
                {coins.map(coin => (
                  <div
                    key={coin.id}
                    onClick={() => router.push(`/market/${coin.id}`)}
                  >
                    <CoinItem data={coin} />
                  </div>
                ))}
              </S.CoinList>
            </S.ContentTab>

            {/* NFT tab */}
            <S.ContentTab active={activeTab === 1}>NFT tab</S.ContentTab>

            {/* New Listing tab */}
            <S.ContentTab active={activeTab === 2}>
              New Listing tab
            </S.ContentTab>

            {/* LaunchPad tab */}
            <S.ContentTab active={activeTab === 3}>LaunchPad tab</S.ContentTab>

            {/* Airdrop tab */}
            <S.ContentTab active={activeTab === 4}>Airdrop tab</S.ContentTab>
          </S.ContentTabs>
        </S.NavTabSection>
      </S.MarketScreen>
    </>
  )
}

export default MarketScreen

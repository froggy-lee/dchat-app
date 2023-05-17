import React, { useState } from 'react'
import * as S from './styles'
import {
  SliderProjects,
  CoinItem,
  LoaderComponent
} from '/src/modules/CoinsModules/components'
import { PauseIcon, PlayIcon } from '/public/svgs'
import { dataSliders, dataCoins } from '/src/modules/CoinsModules/data'
import InfiniteScroll from 'react-infinite-scroll-component'

const Title = ({ title, description }) => {
  return (
    <S.TitleWrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.TitleWrapper>
  )
}

const MainScreen = () => {
  const [pause, setPause] = useState(false)

  const onPlaySlider = () => {
    setPause(!pause)
  }

  return (
    <S.Main>
      <S.ListCoinsSlidersWrapper>
        <S.Top>
          <Title title={`Big Prize`} description={`First come first serve`} />
          <div className="coins-list-slider__icon" onClick={onPlaySlider}>
            {!pause ? <PauseIcon /> : <PlayIcon />}
          </div>
        </S.Top>
        <SliderProjects data={dataSliders} isPause={pause} />
      </S.ListCoinsSlidersWrapper>

      <S.Container>
        <div className="main-container__header">
          <Title title={`New Added`} description={`Pick, Spin & Win.`} />
        </div>

        <InfiniteScroll
          dataLength={dataCoins.length}
          hasMore={false}
          loader={<LoaderComponent />}
        >
          <S.ListCoinsWrapper>
            {dataCoins.map(item => (
              <CoinItem data={item} key={item.id} />
            ))}
          </S.ListCoinsWrapper>
        </InfiniteScroll>
      </S.Container>
    </S.Main>
  )
}

export default MainScreen

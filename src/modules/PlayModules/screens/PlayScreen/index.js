import React from 'react'
import * as S from './styles'
import Slider from 'react-slick'
import { PlayingItem, Title } from '/src/modules/PlayModules/components'
import { useRouter } from 'next/router'

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
}

const PlayScreen = () => {
  const router = useRouter()

  const onChangeRouter = () => router.push('/games/1')

  return (
    <S.PlayScreen>
      <Slider {...settings}>
        <S.GameItem>
          <S.GameImage>
            <S.GameInfo>
              <div className="info-game">
                <div className="info-game__icon"></div>
                <div className="info-game__info">
                  <h1 className="info-game__info-title">Wheel</h1>
                  <span className="info-game__info-description">
                    Tiger Games
                  </span>
                </div>
              </div>
              <S.Button onClick={onChangeRouter}>Play</S.Button>
            </S.GameInfo>
          </S.GameImage>

          <S.GameContainer>
            <S.WhatPlaying>
              <Title title="What We’re Playing"></Title>
              <S.PlayingItemSection>
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
              </S.PlayingItemSection>
            </S.WhatPlaying>

            <S.PlayToEarn>
              <Title title="Play to Earn"></Title>

              <S.PlayingItemSection>
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
              </S.PlayingItemSection>
            </S.PlayToEarn>
          </S.GameContainer>
        </S.GameItem>

        <S.GameItem>
          <S.GameImage>
            <S.GameInfo>
              <div className="info-game">
                <div className="info-game__icon"></div>
                <div className="info-game__info">
                  <h1 className="info-game__info-title">Wheel</h1>
                  <span className="info-game__info-description">
                    Tiger Games
                  </span>
                </div>
              </div>
              <S.Button onClick={onChangeRouter}>Play</S.Button>
            </S.GameInfo>
          </S.GameImage>

          <S.GameContainer>
            <S.WhatPlaying>
              <Title title="What We’re Playing"></Title>
              <S.PlayingItemSection>
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
              </S.PlayingItemSection>
            </S.WhatPlaying>

            <S.PlayToEarn>
              <Title title="Play to Earn"></Title>

              <S.PlayingItemSection>
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
              </S.PlayingItemSection>
            </S.PlayToEarn>
          </S.GameContainer>
        </S.GameItem>

        <S.GameItem>
          <S.GameImage>
            <S.GameInfo>
              <div className="info-game">
                <div className="info-game__icon"></div>
                <div className="info-game__info">
                  <h1 className="info-game__info-title">Wheel</h1>
                  <span className="info-game__info-description">
                    Tiger Games
                  </span>
                </div>
              </div>
              <S.Button onClick={onChangeRouter}>Play</S.Button>
            </S.GameInfo>
          </S.GameImage>

          <S.GameContainer>
            <S.WhatPlaying>
              <Title title="What We’re Playing"></Title>
              <S.PlayingItemSection>
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
              </S.PlayingItemSection>
            </S.WhatPlaying>

            <S.PlayToEarn>
              <Title title="Play to Earn"></Title>

              <S.PlayingItemSection>
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
                <PlayingItem
                  title="Wheel"
                  description="Airdrop, P2E, Multi-play"
                  onClick={onChangeRouter}
                />
              </S.PlayingItemSection>
            </S.PlayToEarn>
          </S.GameContainer>
        </S.GameItem>
      </Slider>
    </S.PlayScreen>
  )
}

export default PlayScreen

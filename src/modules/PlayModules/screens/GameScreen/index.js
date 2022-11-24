import React from 'react'
import * as S from './styles'
import Slider from 'react-slick'
import { StarIcon } from '/public/svgs'
import { Rating } from 'react-simple-star-rating'

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

const GameScreen = () => {
  return (
    <S.GameScreen>
      <S.TopBanner>
        <S.Banner></S.Banner>
        <S.GameIcon></S.GameIcon>
      </S.TopBanner>

      <S.GameInfo>
        <h1 className="game-info__name">Wheel</h1>
        <span className="game-info__description">Airdrop, P2E, Multi-play</span>
        <S.Button>Play</S.Button>
      </S.GameInfo>

      <S.Info>
        <S.Rating>
          <span className="info__title">432 Rating</span>
          <strong className="info__description">5</strong>
          <div className="info__content">
            <Rating
              size="14"
              readonly
              initialValue={5}
              fullIcon={<StarIcon />}
            />
          </div>
        </S.Rating>
        <S.Age>
          <span className="info__title">Age</span>
          <strong className="info__description">5+</strong>
          <div className="info__content">Year old</div>
        </S.Age>
        <S.Language>
          <span className="info__title">Language</span>
          <strong className="info__description">EN</strong>
          <div className="info__content">+12 more</div>
        </S.Language>
      </S.Info>

      <Slider {...settings}>
        <S.GameItem>
          <S.GameImage></S.GameImage>

          <S.Content>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`s standard dummy text
            ever since the 1500s.
          </S.Content>
        </S.GameItem>

        <S.GameItem>
          <S.GameImage></S.GameImage>

          <S.Content>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`s standard dummy text
            ever since the 1500s.
          </S.Content>
        </S.GameItem>

        <S.GameItem>
          <S.GameImage></S.GameImage>

          <S.Content>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`s standard dummy text
            ever since the 1500s.
          </S.Content>
        </S.GameItem>
      </Slider>
    </S.GameScreen>
  )
}

export default GameScreen

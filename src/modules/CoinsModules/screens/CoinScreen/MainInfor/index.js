import React from 'react'
import Image from 'next/image'
import * as S from './styles'
import { useState } from 'react'
import { useEffect } from 'react'

const rating = 5
const tigerCard = ['50 times', '100 times', '300 times']
const spinType = ['Free', 'More Fun', 'Mega Spin', 'Crazy Spin']

function MainInfor() {
  const [ratingStar, setRatingStar] = useState([])

  useEffect(() => {
    let arr = []
    for (let i = 0; i < rating; i++) {
      arr.push(i)
    }
    setRatingStar([...arr])
  }, [])
  return (
    <S.Wrapper>
      <S.Title>
        Bitcoin BTC
        <Image src="/images/icons/tick.png" width={27} height={27} alt="tick" />
      </S.Title>
      <S.ListData>
        <div>
          <S.Number>19,999</S.Number>
          <S.Des>BTC in prize</S.Des>
        </div>
        <div>
          <S.Number>17,664</S.Number>
          <S.Des>BTC remaining</S.Des>
        </div>
        <div>
          <S.Number>02,190</S.Number>
          <S.Des>BTC had been withdraw</S.Des>
        </div>
      </S.ListData>
      <S.Item>
        <div>Rating</div>
        <div>
          {ratingStar.map(star => {
            return (
              <S.Rating key={star}>
                <Image
                  src="/images/icons/star.png"
                  width={20}
                  height={20}
                  alt="star"
                />
              </S.Rating>
            )
          })}
        </div>
        <div></div>
      </S.Item>
      <S.Item>
        <div>Games</div>
        <div></div>
        <div></div>
      </S.Item>
      <S.Item>
        <div>Tiger Card</div>
        <div>
          {tigerCard.map((card, index) => {
            return <S.TigerCard key={index}>{card}</S.TigerCard>
          })}
        </div>
        <div></div>
      </S.Item>
      <S.Item>
        <div>Spin type:</div>
        <div>
          {spinType.map((spin, index) => {
            return <S.SpinType key={index}>{spin}</S.SpinType>
          })}
        </div>
        <div></div>
      </S.Item>
    </S.Wrapper>
  )
}

export default MainInfor

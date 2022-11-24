import React from 'react'
import * as S from './styles'

const PlayingItem = ({ title, description, onClick }) => {
  return (
    <S.PlayingItem>
      <S.InfoSection>
        <S.Icon></S.Icon>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.description>{description}</S.description>
        </S.Info>
      </S.InfoSection>

      <S.Button onClick={onClick}>Play</S.Button>
    </S.PlayingItem>
  )
}

export default PlayingItem

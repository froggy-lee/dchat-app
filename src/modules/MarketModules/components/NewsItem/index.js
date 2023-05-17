import React from 'react'
import * as S from './styles'

const NewsItem = ({ title, time, content }) => {
  return (
    <S.NewsItem>
      <S.Top>
        <S.Title>{title}</S.Title>
        <S.Time>{time}</S.Time>
      </S.Top>
      <S.Content>{content}</S.Content>
    </S.NewsItem>
  )
}

export default NewsItem

import React from 'react'
import * as S from './styles'

const Title = ({ title }) => {
  return (
    <S.TitleSection>
      <S.Title>{title}</S.Title>

      <S.See>See All</S.See>
    </S.TitleSection>
  )
}

export default Title

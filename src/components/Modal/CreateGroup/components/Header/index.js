import React from 'react'
import Image from 'next/image'
import * as S from './styles'

const Header = ({ isAmount }) => {
  return (
    <S.Header>
      <S.Back>
        <S.IconBack>
          <Image
            src="/images/icons/back-chat.png"
            width="8"
            height="18"
            alt="back"
          />
        </S.IconBack>
        Back
      </S.Back>
      <S.TitleWrapper>
        <S.Title>New Group</S.Title>
        {isAmount && <S.Amount>0/200000</S.Amount>}
      </S.TitleWrapper>
      {isAmount && <S.Next>Next</S.Next>}
      <S.Create>Create</S.Create>
    </S.Header>
  )
}

export default Header

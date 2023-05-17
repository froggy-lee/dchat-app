import React from 'react'
import * as S from './styles'
import Image from 'next/image'

function HeaderDetail({ message, handleBack, handleToggle }) {
  return (
    <>
      <S.Wrapper>
        <Image
          src="/images/icons/back-chat.png"
          width={8}
          height={18}
          alt="back"
          onClick={handleBack}
        />

        <S.User>
          <S.Name>{message?.user}</S.Name>
          <div>
            <span> 21000 users.</span> <span>4523 online</span>
          </div>
        </S.User>
        <Image
          src={
            message?.avatar
              ? message.avatar
              : '/images/icons/default-avatar.png'
          }
          width={36}
          height={36}
          alt="logo"
          onClick={handleToggle}
        />
      </S.Wrapper>
    </>
  )
}

export default HeaderDetail

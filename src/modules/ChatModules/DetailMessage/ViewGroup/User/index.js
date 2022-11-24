import React from 'react'
import * as S from './styles'
import Image from 'next/image'

function User({ user }) {
  return (
    <S.Wrapper>
      <S.User>
        <S.Avatar>
          <Image
            src={user.avatar ? user.avatar : '/images/icons/default-avatar.png'}
            width={36}
            height={36}
            alt="avatar"
            layout="fixed"
          />
        </S.Avatar>
        <div>
          <S.Name>{user.name}</S.Name>
          <S.Online>{user.online}</S.Online>
        </div>
      </S.User>
      <S.Role>{user.role ? user.role : ''}</S.Role>
    </S.Wrapper>
  )
}

export default User

import React from 'react'
import Image from 'next/image'
import * as S from './styles'

const ListUser = [
  {
    id: 1,
    firstName: 'first name',
    lastName: 'last name',
    avatar: ''
  },
  {
    id: 2,
    firstName: 'first name',
    lastName: 'last name',
    avatar: ''
  },
  {
    id: 3,
    firstName: 'first name',
    lastName: 'last name',
    avatar: ''
  },
  {
    id: 4,
    firstName: 'first name',
    lastName: 'last name',
    avatar: ''
  },
  {
    id: 5,
    firstName: 'first name',
    lastName: 'last name',
    avatar: ''
  },
  {
    id: 6,
    firstName: 'first name',
    lastName: 'last name',
    avatar: ''
  }
]

function SlideUsers() {
  return (
    <S.Wrapper>
      <S.User>
        <S.Avatar>
          <Image
            src="/images/icons/voice.png"
            width={15.6}
            height={21}
            alt="voice"
          />
        </S.Avatar>
        <S.Name>
          <div>Create</div>
          <div>Voice</div>
        </S.Name>
      </S.User>
      {ListUser.map(user => {
        return (
          <S.User key={user.id}>
            <S.Avatar>
              <Image
                src={
                  user.avatar ? user.avatar : '/images/icons/default-avatar.png'
                }
                width={53}
                height={53}
                alt="avatar"
              />
            </S.Avatar>
            <S.Name>
              <div>{user.firstName}</div>
              <div>{user.lastName}</div>
            </S.Name>
          </S.User>
        )
      })}
    </S.Wrapper>
  )
}

export default SlideUsers

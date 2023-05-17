import React, { useState } from 'react'
import Image from 'next/image'
import * as S from './styles'
import { useRouter } from 'next/router'

function Message(props) {
  const { avatar, user, time, textMessage, id, active } = props.message
  const [seen, setSeen] = useState(false)
  const router = useRouter()

  const handleSeen = () => {
    router.push(`/chat/${id}`)
    setSeen(true)
  }

  return (
    <S.Wrapper
      onClick={handleSeen}
      status={seen}
      className={active ? 'active' : ''}
    >
      <S.Avatar>
        <Image
          src={avatar ? avatar : '/images/icons/default-avatar.png'}
          width={54}
          height={54}
          alt="avatar"
        />
      </S.Avatar>
      <S.TextMessage className={active ? 'active' : ''}>
        <S.Name>
          <S.User className={active ? 'active' : ''}>{user}</S.User>
          <div className="right-name">
            <S.Time>{time}</S.Time>
            <div>
              <Image
                src={
                  active
                    ? '/images/icons/next-chat-active.png'
                    : '/images/icons/next-chat.png'
                }
                width={5}
                height={11}
                alt="next"
              />
            </div>
          </div>
        </S.Name>
        <S.Text>{textMessage}</S.Text>
      </S.TextMessage>
    </S.Wrapper>
  )
}

export default Message

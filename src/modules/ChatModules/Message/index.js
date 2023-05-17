import React, { useState } from 'react'
import Image from 'next/image'
import * as S from './styles'

function Message(props) {
  const { avatar, user, time, textMessage, active } = props.message
  const [seen, setSeen] = useState(active)
  //const router = useRouter()

  const handleSeen = () => {
    //router.push(`/chat/${id}`)
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
          width={52}
          height={52}
          alt="avatar"
        />
      </S.Avatar>
      <S.TextMessage className={active ? 'active' : ''}>
        <S.Name>
          <S.User className={active ? 'active' : ''}>{user}</S.User>
          <S.Time>{time}</S.Time>
        </S.Name>
        <S.TextBox>
          <S.Text>{textMessage}</S.Text>
          <S.Total>212</S.Total>
        </S.TextBox>
      </S.TextMessage>
    </S.Wrapper>
  )
}

export default Message

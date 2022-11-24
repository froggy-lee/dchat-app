import React, { useState } from 'react'
import Image from 'next/image'
import * as S from './styles'

function Message(props) {
  const { avatar, user, textMessage, id } = props.message
  const [check, setCheck] = useState(false)

  const handleCheck = () => setCheck(!check)

  const handleChange = () => {}

  return (
    <S.Wrapper onClick={handleCheck}>
      <div>
        <input
          type="checkbox"
          id={`toggle${id}`}
          checked={check}
          onChange={handleChange}
        />
        <label className="checkbox" htmlFor={`toggle${id}`}></label>
      </div>
      <S.Avatar>
        <Image
          src={avatar ? avatar : '/images/icons/default-avatar.png'}
          width={52}
          height={52}
          alt="avatar"
        />
      </S.Avatar>
      <S.TextMessage>
        <S.Name>
          <S.User>{user}</S.User>
        </S.Name>
        <S.TextBox>
          <S.Text>{textMessage}</S.Text>
        </S.TextBox>
      </S.TextMessage>
      <div>
        <Image
          src="/images/icons/move-chat.png"
          width={15}
          height={10}
          alt="move"
        />
      </div>
    </S.Wrapper>
  )
}

export default Message
